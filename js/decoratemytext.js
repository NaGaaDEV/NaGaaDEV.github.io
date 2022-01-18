window.onload = function() {
    var fontInterval;
    const btn = document.getElementById("btn");
    btn.onclick = function() {
        if(fontInterval != undefined) {
            clearInterval(fontInterval)
            fontInterval = undefined;
        } else {
            const txt = document.getElementById("txt");
            fontInterval = setInterval(function() {
                // const fs = $("#txt").css('font-size');
                const fs = window.getComputedStyle(txt, null).getPropertyValue('font-size');
                txt.style.fontSize = parseInt(fs) + 2 + "px";
            }, 500);
        }
    }

    const chk = document.getElementById("chk");
    chk.onchange = function() {
        const txt = document.getElementById("txt");
        if(chk.checked) {
            txt.style.fontWeight = "bold";
            txt.style.color = "green";
            txt.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url(img/dollar.jpeg)";

        } else {
            txt.style.fontWeight = "normal";
            txt.style.color = "black";
            txt.style.textDecoration = "none";
            document.body.style.background = "none";
        } 
    }

    // Igpay Atinlay
    const Igpay = document.getElementById("igpay")
    Igpay.onclick = function() {
        let txt = document.getElementById("txt");
        let str = txt.value.trim().split(' ');
        console.log(str);
        for(let i=0; i < str.length; i++) {
            let consonant = "";
            for(let charIndex=0; charIndex < str[i].length; charIndex++) {
                let char = str[i].charAt(charIndex);
                if((/^[aeiou]$/i).test(char)) {
                    str[i] = str[i].substring(consonant.length) + consonant;
                    break;
                }
                consonant += char;
            }
            if(str[i])
                str[i] = str[i] + "-ay";
        }
        txt.value = str.join(' ');
    }

    // Malkovitch
    const malko = document.getElementById("malko");
    malko.onclick = function() {
        const txt = document.getElementById("txt");
        let str = txt.value.trim().split(' ');
        for(let i=0; i < str.length; i++) {
            if(str[i].length >= 5) {
                str[i] = "Malkovitch";
            }
        }
        txt.value = str.join(' ');
    }
}