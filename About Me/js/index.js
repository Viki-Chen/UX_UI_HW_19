console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
  $(".projects").hover(function(){
    $(this).css("color", "black");
    },
    function(){
      $(this).css("color", "white");
    });

});