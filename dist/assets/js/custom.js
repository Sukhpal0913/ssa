$(document).ready(function(){
  //menu
  $(".nav-icon button").click(function(){
    $(".nav-wrapper").slideDown("moveLeft");
    $("body").addClass("scollNonef");
  });
  $(".nav-x button").click(function(){
    $(".nav-wrapper").slideUp("moveLeft");
    $("body").removeClass("scollNone");
  });


});
