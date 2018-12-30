import { MDCRipple } from '@material/ripple/index';
import { MDCSlider } from '@material/slider/index';
import * as Boba from '@benwiz/boba.js';

// Add ripples to buttons
document.querySelectorAll('.mdc-button').forEach(MDCRipple.attachTo);

//
// Boba.js
//

// Initialize boba.js options by grabbing the defaults
const bobaOptions = Boba.getDefaultOptions();

// Vertex configs
bobaOptions.numVertices = 40;
bobaOptions.drawVertices = true;
bobaOptions.vertexMinSize = 8;
bobaOptions.vertexMaxSize = 16;
bobaOptions.vertexMinSpeed = 0.5;
bobaOptions.vertexMaxSpeed = 2;
bobaOptions.vertexColors = [
  {
    r: 30,
    g: 144,
    b: 255,
    a: 0.1,
  },
];

// Edge configs
bobaOptions.numNeighbors = 2;
bobaOptions.drawEdges = false;
bobaOptions.edgeColors = [
  {
    r: 30,
    g: 144,
    b: 255,
    a: 0.1,
  },
];

// Shape configs
bobaOptions.drawShapes = true;
bobaOptions.shapeColors = [
  {
    r: 30,
    g: 144,
    b: 255,
    a: 0.05,
  },
];

// Start the animation
Boba.start(bobaOptions);

//
// Event Listeners
//
const restartBoba = (options) => {
  Boba.stop();
  Boba.start(options);
};

const container = document.querySelector('#container');

// Vertex options
const numVerticesSlider = new MDCSlider(container.querySelector('#num-vertices'));
numVerticesSlider.listen('MDCSlider:change', () => {
  bobaOptions.numVertices = numVerticesSlider.value;
  restartBoba(bobaOptions);
});
const numNeighborsSlider = new MDCSlider(container.querySelector('#num-neighbors'));
numNeighborsSlider.listen('MDCSlider:change', () => {
  bobaOptions.numNeighbors = numNeighborsSlider.value;
  restartBoba(bobaOptions);
});
