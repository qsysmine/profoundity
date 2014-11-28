(function() {
  var data = new Firebase("https://profoundity-save.firebaseio.com/");
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
    });
  }
})();
