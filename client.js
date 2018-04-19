$(document).ready(function() {

  // Load content from test.html file in browser
  $('#result').load('test.html', function(responseTxt, statusTxt, xhr) {
    if(statusTxt == 'success') {
      alert('Success');
    } else if (statusTxt == 'error') {
      alert('Error: '+xhr.statusText);
    }
  });

  // GET:  Similar to Load
  $.get('test.html', function(data) {
    $('#result').html(data);
  });

  // GET JSON
  $.getJSON('users.json', function(data) {
    $.each(data, function(i, user) {
      $('ul#users').append('<li>'+user.firstName+'</li>');
    });
  });

  // AJAX
  $.ajax({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/posts',
    dataType: 'json'
  }).done(function(data) {
    console.log(data);
    $.map(data, function(post, i) {
      $('#result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>');
    });
  });

  // POST
  $('#postForm').submit(function(e) {
    e.preventDefault();

    let title = $('#title').val;
    let body = $('#body').val;
    let url = $(this).attr('action');

    $.post(url, {title:title, body:body}).done(function(data) {
      console.log('Post Saved');
      console.log(data);
    });
  });



}); // end document.ready
