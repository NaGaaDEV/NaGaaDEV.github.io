// created by Nega Mogassa at 2022-01-18 11:39.
// https://github.com/NaGaaDEV
window.onload = function() {
    "use strict";
    var framerate = 250;
    var frameIndex = 0;
    var textToAnimate;
    var sequencs;
    var intervalRef;

    document.getElementById("size").onchange = (evt) => { 
        document.getElementById("txt").style.fontSize = document.getElementById("size").value 
    };
    document.getElementById("start").onclick = (evt) => { 
        toggleControle();
        playManager();
    };
    document.getElementById("stop").onclick = (evt) => { 
        toggleControle();
        playManager();
    };
    document.getElementById("speed").onchange = (evt) => { framerate = evt.target.checked ? 50 : 250};
    document.getElementById("animation").onchange = (evt) => { 
        document.getElementById("txt").value = ANIMATIONS[document.getElementById("animation").value];
    };
    function playManager() {
        if(intervalRef != undefined) {
            clearInterval(intervalRef)
            intervalRef = undefined;
            document.getElementById("txt").value = textToAnimate;
        }
        else {
            textToAnimate = document.getElementById("txt").value;
            sequencs = textToAnimate.split("=====");
            updateFrame();
        }
    }
    function updateFrame() {
        clearInterval(intervalRef);
        document.getElementById("txt").value = sequencs[frameIndex++];
        if(frameIndex == sequencs.length)
            frameIndex = 0;
        intervalRef = setInterval(updateFrame, framerate);
    }
    function toggleControle(controle) {
        document.getElementById("start").disabled = !document.getElementById("start").disabled;
        document.getElementById("stop").disabled = !document.getElementById("stop").disabled;
        document.getElementById("animation").disabled = !document.getElementById("animation").disabled;
    }
}