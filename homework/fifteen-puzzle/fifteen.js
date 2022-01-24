$(function() {
    var empty_row = 3;
    var empty_col = 3;
    const rows_cols = 4;
    const tile_size = 100;

    const tiles = function() { return $("#puzzlearea > div") };

    init = function() {
        // var puzzleArea = document.getElementById('puzzlearea');
        // var divs = puzzleArea.getElementsByTagName("div");
        
        // initialize each piece
        for (var i=0; i< tiles().length; i++) {
            var div = tiles()[i];
            
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;
    
            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            
            // store x and y for later
            div.x = x;
            div.y = y; 
        }        
    };
    init();

    tiles().hover(function() {
        $(this).addClass("movablepiece")
    })
});