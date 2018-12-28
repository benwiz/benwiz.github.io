import { MDCRipple } from '@material/ripple/index';
import * as Boba from '@benwiz/boba.js';

// Add ripples to buttons
document.querySelectorAll('.mdc-button').forEach(MDCRipple.attachTo);

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
