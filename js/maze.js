$(function() {
    let playing = false;
    $("div.boundary").mouseenter(function() {
        if(playing) lost();
    })
    $("div#start").click(function() {
        playing = true;
        $("div.boundary").removeClass("youlose");
        $("#status").text("Good luck!");
    })
    $("div#end").mouseenter(function() {
        if(playing) $("#status").text("You win! :]");
        playing = false;
    })
    $("div#maze").mouseleave(function() {
        if(playing) lost();
    })

    function lost() {
        $("div.boundary").addClass("youlose");
        $("#status").text("Sorry, You lost :[");
        playing = false;
    }
});