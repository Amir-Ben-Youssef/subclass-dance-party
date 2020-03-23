$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor(Math.random() * 300),
      Math.floor(Math.random() * 1200),
      Math.random() * 2000
    );
    dancer.step();
    dancer.setPosition(dancer.top , dancer.left)
    window.dancers.push(dancer)
    $('body').append(dancer.$node);

    $('img').mouseover((e)=> {
      e.target.classList.add('rotate')

    })
    $('img').mouseout((e)=> {
      e.target.classList.remove('rotate')
    })
  });

  $(".lineUp").on('click',function(event){
    var top = $('body').height()/2
    var left = 0
    for ( var i = 0 ; i< window.dancers.length ; i ++){
      console.log(top, left)
      window.dancers[i].setPosition(top,left)
      left += 200
    }
  })


  $(".hide").on('click',function(event){
    $('img').remove()
    while (window.dancers.length){
      window.dancers.pop()
    }
  })

  $(".Pairing").on('click', function(event){
    var array = window.dancers
    var obj ={}
    for ( var i = 0 ; i< array.length ; i++){
      if (!obj[i]){
        var minDistance;
        var point;
        for ( var j = 0 ; j< array.length; j++){
          if (!obj[j]){
            if ( i!==j ) {
              var x = Math.pow((array[i].left-array[j].left),2);
              var y = Math.pow((array[i].top-array[j].top),2);
              var distance = Math.sqrt(x+y)
              if (minDistance === undefined){
                minDistance = distance
                point = j
              }
              else if ( minDistance > distance){
                minDistance= distance
                point = j
              }

            }
          }
        }

        obj[point]= true
        obj[i] = true
        var randTop = Math.random() * 300;
        var randLeft = Math.random() * 1200;
        window.dancers[i].setPosition(randTop, randLeft);
        window.dancers[point]. setPosition (randTop, randLeft + 20);
      }

    }
  })



});
