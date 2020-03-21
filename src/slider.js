var Slider = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src = "https://lh3.googleusercontent.com/proxy/wnTiGDLwxvacEa2ZhhUmW5W2wFrBst9G31KVK2_0CohVmdBN5cyORZk0VK0tFrUYrA_Mf3lyTUGy3Bt9-W-qwpSuLB3mBPFK30i3z6ICV5_svvsH2tDAdRZ7duM" class="dancer"></img>')

}
Slider.prototype = Object.create(Dancer.prototype);
Slider.prototype.constructor = Slider;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  Slider.prototype.step = function() {


    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.addClass("sliding");
    //this.$node.toggleClass('a b')
  };

