// import {MDCRipple} from '@material/ripple';
//
// MDCRipple.attachTo(document.querySelector('.mdc-button'));

const tooltip = document.querySelector('#tooltip');
const links = document.querySelectorAll('a');
const onLinkMouseover = (e) => {
  tooltip.style.visibility = 'visible';
  tooltip.textContent = e.target.getAttribute('label');
};
const onLinkMouseleave = (_e) => {
  tooltip.style.visibility = 'hidden';
  tooltip.textContent = 'nothing';
};
links.forEach((link) => {
  link.addEventListener('mouseenter', onLinkMouseover);
  link.addEventListener('mouseleave', onLinkMouseleave);
});
