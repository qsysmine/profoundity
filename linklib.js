(function() {
  $('body').fadeIn(500);
  $('a').click(function(e) {
    var element = $(this);
    var href = element.attr("href");
    e.preventDefault()
    $('body').fadeOut(500, function() {
      location.assign(href);
    });
  });
})();
