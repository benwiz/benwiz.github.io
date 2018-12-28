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

// Edge configs
bobaOptions.numNeighbors = 2;
bobaOptions.drawEdges = false;

// Shape configs
bobaOptions.drawShapes = true;

// Start the animation
Boba.start(bobaOptions);
