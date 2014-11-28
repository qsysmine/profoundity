(function() {
  var data = new Firebase("https://profoundity-save.firebaseio.com/");
  var unCode = new Date().getTime() * 2
  $('input').keypress(function(e) {
    if(e.keyCode == 13) {
      data.child("saves").child(unCode).set({top:$('#top').val(),middle:$('#middle').val(),bottom:$('#bottom').val()});
      $('#form').fadeOut(500, function() {
        $('#link').attr("href","/l/#" + unCode);
        $('#link').slideDown(500);
      });
    }
  });
})();
