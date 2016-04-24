jQuery('a[href^="#"]').click(function(e) {
    var hash = $(this).attr('href');
    jQuery('html,body').animate({
        scrollTop: jQuery(this.hash).offset().top
    }, 1000, function() {
        var title = "Swaraj Panigrahi | ";
        var crntSection = hash.split("-")[1];
        crntSection = crntSection.charAt(0).toUpperCase() + crntSection.substr(1);
        $("title").text(title + crntSection);
    });
    e.preventDefault();
    return false;
});

$(document).ready(function() {
  // $(".navbar-toggle").on("click", function() {
  //     $(this).toggleClass("active");
  //     // $(".navbar-collapse").toggleClass("collapse");
  // });

  $(".navbar-nav > li").on("click", function(){
    $(this).toggleClass("active");
  });
});
