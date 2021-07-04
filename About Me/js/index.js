console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
// $(".intro").hover(function(){
  // $(this).css("color", "blue");
  // },
  // function(){
    // $(this).css("color", "black");
  // });

  $(".projects").hover(function(){
    $(this).css("color", "yellow");
    },
    function(){
      $(this).css("color", "white");
    });

});