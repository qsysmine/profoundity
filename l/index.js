//This is code I wrote while tired; it might not necessarily be good; in fact, it's probably bad code. Prepare to cringe.
(function() {
  var data = new Firebase("https://profoundity-save.firebaseio.com/");
  $('#top,#middle,#bottom').hide();
  if(location.hash != "") {
    var unCode = parseInt(location.hash.split("#")[1]);
    var obj = data.child("saves").child(unCode);
    obj.on("value", function(snap) {
      var top, middle, bottom;
      top = snap.val().top;
      middle = snap.val().middle;
      bottom = snap.val().bottom;
      $('#top').text(top);
      $('#middle').text(middle);
      $('#bottom').text(bottom);
      $('#top,#middle,#bottom').fadeIn(500);
    });
  } else {
    location.assign("/");
  }
})();
