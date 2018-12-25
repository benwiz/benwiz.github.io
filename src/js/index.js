import { MDCRipple } from '@material/ripple/index';
import '../../dist/js/drawing.js';

// Add ripples
document.querySelectorAll('.mdc-button').forEach(MDCRipple.attachTo);
