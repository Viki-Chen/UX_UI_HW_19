console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $("#Project1").hover(function(){
        
        if ($(this).attr("src") == "images/SafeTravel.png"){
            $(this).attr("src", $(this).attr("src").replace("SafeTravel.png", "SafeTravel1.png"));
        } else {
            $(this).attr("src", $(this).attr("src").replace("SafeTravel1.png", "SafeTravel.png"));
        }
    })

    $("#Project2").hover(function(){
        
        if ($(this).attr("src") == "images/PartyLuck.png"){
            $(this).attr("src", $(this).attr("src").replace("PartyLuck.png", "PartyLuck1.png"));
        } else {
            $(this).attr("src", $(this).attr("src").replace("PartyLuck1.png", "PartyLuck.png"));
        }
    })

    $("#Project3").hover(function(){
        
        if ($(this).attr("src") == "images/StrayCatAlliance.png"){
            $(this).attr("src", $(this).attr("src").replace("StrayCatAlliance.png", "StrayCatAlliance1.png"));
        } else {
            $(this).attr("src", $(this).attr("src").replace("StrayCatAlliance1.png", "StrayCatAlliance.png"));
        }
    })

});


