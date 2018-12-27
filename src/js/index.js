import { MDCRipple } from '@material/ripple/index';
import * as Boba from '@benwiz/boba.js';

// Add ripples to buttons
document.querySelectorAll('.mdc-button').forEach(MDCRipple.attachTo);

// Initialize boba.js
const bobaOptions = {
  x: 0,
  y: 0,
  width: document.documentElement.scrollWidth,
  height: document.documentElement.scrollHeight,
  numVertices: 30,
  numNeighbors: 2,
  numSides: 3,
};
Boba.start(bobaOptions);
