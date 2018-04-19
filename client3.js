// $('h1').hide();
// $('h1#heading1').hide();
// $('h1.heading2').hide();
// $('.heading2').hide();
// $('p').css('color', 'red');

$('ul#list li:first').css('color', '#009ACD');
$('ul#list li:last').css('color', 'blue');
$('ul#list li:even').css('background-color', '#EEE0E5');
$('ul#list li:odd').css('background-color', 'grey');
$('ul#list li:nth-child(3n)').css('list-style', 'none');

// $(':button').hide();
// $(':text').hide();

$('[href]').css('color', 'red');
$('a[href="http://yahoo.com"]').css('color', 'purple');
// $('*').hide();

// MOUSE EVENTS
$(document).ready(function() {

  // Button click event
  $('#btn1').click(function() {
    alert('Button Clicked!');
  });

  // Button click event using .on
  $('#btn1').on('click', function() {
    alert('Button Clicked!');
  });

  // Hide paragraph 3
  $('#btn1').on('click', function() {
    $('.para3').hide();
  });

  // Show paragraph 3
  $('#btn2').on('click', function() {
    $('.para3').show();
  });

  // Toggle
  $('#btn3').on('click', function() {
    $('.para3').toggle();
  });

  // Double-click Toggle
  $('#btn2').dblclick(function() {
    $('.para3').toggle();
  });

  // Hover:  '.hover' combines 'mouseenter' and 'mouseleave'
  $('#btn2').hover(function() {
    $('.para2').toggle();
  });

  // Mousemove
  $('#btn4').on('mousemove', function() {
    $('.para4').toggle();
  });

  // Pass in an event
  $('#btn4').click(function(e) {
    alert(e.currentTarget.id);
    alert(e.currentTarget.innerHTML);
  });

  // Mousemove + Coordinates
  $('#btn4').on('mousemove', function(e) {
    console.log('Coordinates: Y: '+e.clientY+"X: "+e.clientX);
  });

  // Focus
  $('input').focus(function() {
    $(this).css('background', 'pink');
  });

  // Blur (opposite of 'focus')
  $('input').blur(function() {
    $(this).css('background', 'white');
  });

  // Keyup
  $('input').keyup(function(e) {
              // gives us what we're typing in
    console.log(e.target.value);
  });

  $('select#gender').change(function() {
    alert(e.target.value);
  });

  // console.log does not log, because the form is submitting
  $('#form').submit(function() {
    console.log('Submitted');
  });
  $('#form').submit(function(e) {
    e.preventDefault();
    let name = $('input#name').val();
    console.log(name);
  });

  // $('#myDiv').text('Hello World');
  $('#myDiv').html('<h3>Hello World</h3>');

  // alerts "Hello World"
  alert($('#myDiv').text());

  // Append list item to existing ul
  $('ul').append('<li>Append List Item</li>');

  // Prepend list item to existing ul
  $('ul').prepend('<li>Prepend List Item</li>');

  $('.para1').appendTo('.para2');

  // Position "Hello" before the ul
  $('ul').before('<h4>Hello</h4>');

  // Posiion "World" after the ul
  $('ul').after('<h4>World</h4>');

  // Empty:  Removes inner elements
  // $('ul').empty();

  // Detach:  Removes the ul from the DOM
  // $('ul').detach();

  // Attribute:  Pass in the attribute and the desired value
  $('a').attr('target', '_blank');

  // alert($('a').attr('href'));

  // Wrap:  Wraps the paragraphs in h1 tags
  // $('p').wrap('<h1>');
  // Wrap:  Wraps the paragraphs into 1 set of h1 tags
  // $('p').wrapAll('<h1>');

  $('#newItem').keyup(function(e) {
    let code = e.which;
    if(code === 13) {
      e.preventDefault();
      $('ul').append('<li>'+e.target.value+'</li>');
    }
  });

  // ARRAYS
  let myArr = ['Brad', 'Kelly', 'Nate', 'Maria'];
  // Append users array to lis
  $.each(myArr, function(i, val) {
    console.log(val);
    $('#users').append('<li>'+val+'</li>')
  });

  // Create new array
  let newArr = $('ul#list li').toArray();
  console.log(newArr);

}); // end document.ready
