import { MDCRipple } from '@material/ripple/index';
import * as Boba from '@benwiz/boba.js';
// import '../../dist/js/drawing.js';

// Add ripples to buttons
document.querySelectorAll('.mdc-button').forEach(MDCRipple.attachTo);
