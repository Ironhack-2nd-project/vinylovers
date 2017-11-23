console.log('range loaded');
function printValue(rangeComponent, textField) {
  const range = document.getElementById(rangeComponent);
  const rangeText = document.getElementById(textField);

  rangeText.value = range.value;
}
