var dialog = new mdc.dialog.MDCDialog(document.querySelector('#mdc-dialog-default'));

dialog.listen('MDCDialog:accept', function() {
  console.log('accepted');
})

dialog.listen('MDCDialog:cancel', function() {
  console.log('canceled');
})