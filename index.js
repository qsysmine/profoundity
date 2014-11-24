(function() {
  var hash = location.hash;
  var comm = hash.split("#")[1];
  var parts = comm.split("/");
  var top = parts[0];
  var middle = parts[1];
  var bottom = parts[2];
  $('#top').text(top.toUpperCase());
  $('#middle').text(middle);
  $('#bottom').text(bottom.toUpperCase());
})();
