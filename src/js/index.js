import { MDCRipple } from '@material/ripple/index';
import { MDCSlider } from '@material/slider/index';
import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';
// import * as Boba from '@benwiz/boba.js';
import * as Boba from '@benwiz/boba.wasm';

const options = {
  // Canvas
  x: 0,
  y: 0,
  width: document.documentElement.scrollWidth,
  height: document.documentElement.scrollHeight,
  // Vertices
  drawVertices: true,
  vertexMinRadius: 8,
  vertexMaxRadius: 16,
  vertexMinSpeed: 0.5,
  vertexMaxSpeed: 0.8,
  vertexColor: {
    r: 30,
    g: 144,
    b: 255,
    a: 0.2,
  },
  // Edges
  drawEdges: true,
  edgeColor: {
    r: 30,
    g: 144,
    b: 255,
    a: 0.2,
  },
  // Triangles
  drawTriangles: true,
  triangleColor: {
    r: 30,
    g: 144,
    b: 255,
    a: 0.2,
  },
};
Boba.start(options);

// //
// // Boba.js
// //

// // Initialize boba.js options by grabbing the defaults
// const bobaOptions = Boba.getDefaultOptions();

// // Vertex configs
// bobaOptions.numVertices = 40;
// bobaOptions.drawVertices = true;
// bobaOptions.vertexMinSize = 8;
// bobaOptions.vertexMaxSize = 16;
// bobaOptions.vertexMinSpeed = 0.5;
// bobaOptions.vertexMaxSpeed = 2;
// bobaOptions.vertexColors = [
//   {
//     r: 30,
//     g: 144,
//     b: 255,
//     a: 0.1,
//   },
// ];

// // Edge configs
// bobaOptions.numNeighbors = 2;
// bobaOptions.drawEdges = false;
// bobaOptions.edgeColors = [
//   {
//     r: 30,
//     g: 144,
//     b: 255,
//     a: 0.1,
//   },
// ];

// // Shape configs
// bobaOptions.drawShapes = true;
// bobaOptions.shapeColors = [
//   {
//     r: 30,
//     g: 144,
//     b: 255,
//     a: 0.05,
//   },
// ];

// // Start the animation
// Boba.start(bobaOptions);

// //
// // Event Listeners
// //
// const restartBoba = (options) => {
//   Boba.stop();
//   Boba.start(options);
// };

// const container = document.querySelector('#container');

// const numVerticesSlider = new MDCSlider(container.querySelector('#num-vertices'));
// numVerticesSlider.listen('MDCSlider:change', () => {
//   bobaOptions.numVertices = numVerticesSlider.value;
//   restartBoba(bobaOptions);
// });

// const numNeighborsSlider = new MDCSlider(container.querySelector('#num-neighbors'));
// numNeighborsSlider.listen('MDCSlider:change', () => {
//   bobaOptions.numNeighbors = numNeighborsSlider.value;
//   restartBoba(bobaOptions);
// });

// // This commented out code supposedly sets up the ripple, but it's not working
// // const showVerticesCheckbox = new MDCCheckbox(container.querySelector('#vertex-checkbox'));
// // const showVerticesFormField = new MDCFormField(container.querySelector('#vertex-form-field'));
// // showVerticesFormField.input = showVerticesCheckbox;

// const showVerticesCheckboxInput = container.querySelector('#vertex-checkbox input');
// showVerticesCheckboxInput.addEventListener('change', (e) => {
//   bobaOptions.drawVertices = e.target.checked;
//   restartBoba(bobaOptions);
// });

// const showEdgesCheckboxInput = container.querySelector('#edge-checkbox input');
// showEdgesCheckboxInput.addEventListener('change', (e) => {
//   bobaOptions.drawEdges = e.target.checked;
//   restartBoba(bobaOptions);
// });

// const showShapesCheckboxInput = container.querySelector('#shape-checkbox input');
// showShapesCheckboxInput.addEventListener('change', (e) => {
//   bobaOptions.drawShapes = e.target.checked;
//   restartBoba(bobaOptions);
// });

// // TODO: Use the following as a starting point for the hue slider
// // document.documentElement.style.setProperty('--mdc-theme-primary', '#ff0000');
// // document.documentElement.style.setProperty('--mdc-theme-secondary', '#ff0000');
