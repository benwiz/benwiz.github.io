import { titleBoxes } from './camera-boxes.js';

// Automatic OCR starts immediately; marks request additional serialized passes.
export function titleEditor({ root, canvas, svg, feedback, status, undo, cancel }) {
  let pending;
  return async function edit(source, signal, process) {
    signal.throwIfAborted(); pending?.();
    const controller = new AbortController();
    const processingSignal = AbortSignal.any([signal, controller.signal]);
    const focus = document.activeElement;
    const siblings = [...root.parentElement.children].filter(node => node !== root && !node.classList.contains('toast-area')).map(node => [node, node.inert]);
    for (const [node] of siblings) node.inert = true;
    document.body.classList.add('editing'); root.hidden = false; cancel.focus();
    canvas.width = source.width; canvas.height = source.height; canvas.getContext('2d').drawImage(source, 0, 0);
    svg.setAttribute('viewBox', `0 0 ${source.width} ${source.height}`); svg.replaceChildren();
    const overlay = titleBoxes(feedback), regions = [], matches = [], candidates = [];
    let run, origin, draft, pointerId, timer, revision = 0, busy = false, automaticDone = false, finished = false;
    const observer = new ResizeObserver(resize); observer.observe(canvas); resize();
    function resize() {
      const bounds = canvas.getBoundingClientRect(), parent = canvas.parentElement.getBoundingClientRect();
      for (const layer of [svg, feedback]) Object.assign(layer.style, { width: `${bounds.width}px`, height: `${bounds.height}px`, left: `${bounds.left-parent.left}px`, top: `${bounds.top-parent.top}px` });
    }
    function point(event) {
      const bounds = svg.getBoundingClientRect();
      return { x: Math.max(0, Math.min(source.width, (event.clientX-bounds.left)*source.width/bounds.width)),
        y: Math.max(0, Math.min(source.height, (event.clientY-bounds.top)*source.height/bounds.height)) };
    }
    function region(a, b) {
      const x0=Math.min(a.x,b.x), y0=Math.min(a.y,b.y), x1=Math.max(a.x,b.x), y1=Math.max(a.y,b.y);
      return { x0,y0,x1,y1,cx:(x0+x1)/2,cy:(y0+y1)/2,width:x1-x0,height:y1-y0,angle:0,manual:true };
    }
    function draw(node, box) { for (const [key,value] of Object.entries({x:box.x0,y:box.y0,width:box.width,height:box.height})) node.setAttribute(key,value); }
    function redrawFeedback() { overlay.candidates(candidates, source.width, source.height); for (const match of matches) overlay.recognized(match); }
    function schedule() {
      clearTimeout(timer);
      if (busy || origin || finished) return;
      timer = setTimeout(run, 350);
    }
    function down(event) {
      if (origin || event.button !== 0 || finished) return;
      clearTimeout(timer); root.dataset.phase = 'marking';
      origin = point(event); pointerId = event.pointerId; svg.setPointerCapture(event.pointerId);
      draft = document.createElementNS(svg.namespaceURI, 'rect'); svg.append(draft); draw(draft,region(origin,origin));
    }
    function move(event) { if(origin && event.pointerId === pointerId) draw(draft,region(origin,point(event))); }
    function up(event) {
      if(!origin || event.pointerId !== pointerId)return;
      const box=region(origin,point(event)); origin=null;
      if(box.width>=12 && box.height>=4) { regions.push(box); revision++; } else draft.remove();
      draft=null; undo.disabled = !regions.length; schedule();
    }
    function pointerCancel() { origin=null; draft?.remove(); draft=null; schedule(); }
    undo.disabled = true;
    return new Promise((resolve,reject) => {
      function finish(error) {
        if (finished) return; finished = true; clearTimeout(timer);
        observer.disconnect(); root.hidden=true; pending=null; overlay.clear();
        canvas.width = canvas.height = 0;
        for (const [node, inert] of siblings) node.inert = inert;
        document.body.classList.remove('editing'); focus?.focus({preventScroll:true});
        for(const [type,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',pointerCancel]]) svg.removeEventListener(type,fn);
        undo.removeEventListener('click',onUndo); cancel.removeEventListener('click',onCancel); signal.removeEventListener('abort',onAbort);
        if(error)reject(error);else resolve(matches);
      }
      function onUndo(){clearTimeout(timer);origin=null;draft?.remove();draft=null;regions.pop();svg.lastElementChild?.remove();revision++;undo.disabled=!regions.length;schedule();}
      function onCancel(){matches.interrupted = busy; controller.abort(); finish();}
      function onAbort(){controller.abort(signal.reason);finish(signal.reason);}
      pending=onCancel;
      for(const [type,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',pointerCancel]]) svg.addEventListener(type,fn);
      undo.addEventListener('click',onUndo); cancel.addEventListener('click',onCancel); signal.addEventListener('abort',onAbort,{once:true});
      run = async () => {
        if (finished || busy || origin) return;
        busy = true; clearTimeout(timer); root.dataset.phase='reading';
        const capturedRevision=revision, selected=automaticDone ? regions.map(box=>({...box})) : undefined;
        automaticDone=true;
        status.textContent=selected?.length ? 'Checking marked areas…' : 'Reading camera photo…';
        let failed=false;
        try {
          if (!selected || selected.length) await process(selected, {
            signal: processingSignal,
            onCandidates: found => { if(!finished){candidates.push(...found);redrawFeedback();} },
            onMatch: match => { if(!finished){matches.push(match);overlay.recognized(match);} },
            onProgress: message => { if(!finished)status.textContent=message; },
          });
        } catch(error) { if(processingSignal.aborted)return;failed=true;matches.failed=true; }
        finally { busy=false; }
        if(finished || signal.aborted)return;
        if(revision!==capturedRevision){schedule();return;}
        const count=new Set(matches.map(match=>match.name)).size;
        status.textContent=count ? `${count} ${count===1?'name':'names'} recognized.` : failed ? 'Reading failed. Draw a box around the card name or try another photo.' : 'No match yet. Draw a box around the card name or try closer.';
        if(!origin)root.dataset.phase='review';
      };
      run();
    });
  };
}
