console.log('range loaded');

//Connect slider and text field to update each other
document.getElementById('distanceSlider').addEventListener('change', function(){
  document.getElementById('rangevalue').value = this.value;
});
document.getElementById('rangevalue').addEventListener('change', function(){
  document.getElementById('distanceSlider').value = this.value;
});
