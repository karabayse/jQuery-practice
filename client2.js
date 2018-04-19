$(document).ready(function() {

  // EFFECTS

  // FadeOut
  $('#btnFadeOut').click(function() {
                          // optional function
    $('#box').fadeOut(3000, function() {
      $('#btnFadeOut').text('Box is gone!');
    });
  });

  // FadeIn
  $('#btnFadeIn').click(function() {
    $('#box').fadeIn('fast');
  });

  // Fadetoggle:  Fades in and out
  $('#btnFadeTog').click(function() {
    $('#box').fadeToggle('slow');
  });

  // SlideDown
  $('#btnSlideDown').click(function() {
    $('#box').slideDown(1000);
  });

  // SlideUp
  $('#btnSlideUp').click(function() {
    $('#box').slideUp('fast');
  });

  // SlideToggle
  $('#btnSlideTog').click(function() {
    $('#box').slideToggle('slow');
  });

  // Stop effects
  $('#btnStop').click(function() {
    $('#box').stop();
  });



  // ANIMATIONS

  // Positioning

  // Move Right
  // Need to establish "position: relative" in CSS for "left: 500" to work
  $('#moveRight').click(function() {
    $('#box2').animate({
      // Move 500 from the left, towards the right
      left: 500,
      // Change size of box
      height: '300px',
      width: '300px',
      opacity: '0.5'
    });
  });

  // Move Left
  // Need to establish "position: relative" in CSS for "right: 500" to work
  $('#moveLeft').click(function() {
    $('#box2').animate({
      // Adjusts box2's left margin to 0
      left: 0,
      // return to its original size and opacity
      height: '100px',
      width: '100px',
      opacity: '1'
    });
  });

  // Move Around
  $('#moveAround').click(function() {
    let box = $('#box2');
    box.animate({
      left: 300
    });
    box.animate({
      top: 300
    });
    box.animate({
      left: 0,
      top: 300
    });
    box.animate({
      left: 0,
      top: 0
    });
  });


}); // end document.ready
