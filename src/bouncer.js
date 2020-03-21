var Bouncer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src = "https://www.jump-rush.com/wp-content/uploads/2019/02/afrojumper.png" class="dancer"></img>')

}
Bouncer.prototype = Object.create(Dancer.prototype);
Bouncer.prototype.constructor = Bouncer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  Bouncer.prototype.step = function() {


    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.addClass("bouncing");
    //this.$node.toggleClass('a b')
  };

