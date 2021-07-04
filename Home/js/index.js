console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $('#viki').hover(function(){
        if ($(this).attr("src") == "images/SafeTravel.png"){
            $(this).attr("src", $(this).attr("src").replace("SafeTravel.png", "SafeTravel1.png"));
        } else {
            $(this).attr("src", $(this).attr("src").replace("SafeTravel1.png", "SafeTravel.png"));
        }
    })
});