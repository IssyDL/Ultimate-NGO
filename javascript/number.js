$(document).ready(function () {
  $('.submit').click(function () {
    var username = $('.Username').val()
    $.post('http://ngo.futuristicblanket.com/register', {
      "username": username
    }, function (data) {
      console.log(data);
    }, 'json');
  });
});
