import {MDCRipple} from '@material/ripple';

// Apply ripple to all ripple-buttons
const rippleButtons = document.querySelectorAll('.ripple-button');
rippleButtons.forEach(function (button) {
  new MDCRipple(button);
  console.log(button);
});
