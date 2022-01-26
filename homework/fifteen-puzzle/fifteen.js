// created by Nega Mogassa at 2022-01-25 21:01.
// https://github.com/NaGaaDEV
$(function() {
    var emptyRow = 3;
    var emptyCol = 3;

    const tiles = function() { return $("#puzzlearea > div") };

    init = function() {
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

            $(div).attr('data-row', y/100);
            $(div).attr('data-col', x/100);
            $(div).attr('id', "tile-"+y/100+"_"+x/100);
        }        
    };
    init();

    tiles().hover(
        function() {
        if(movable(this))
            $(this).addClass("movablepiece") 
        }, 
        function() {
            $(this).removeClass("movablepiece")
        }
    );
    tiles().on('click', function() {
        if(movable(this))
            move(this);
    });

    function movable(tile) {
        let row = parseInt($(tile).attr('data-row'));
        let col = parseInt($(tile).attr('data-col'));
        if( (row >= emptyRow - 1 && row <= emptyRow + 1) && (col >= emptyCol - 1 && col <= emptyCol + 1) 
        && ( ((emptyRow + emptyCol) - 1 === (row + col)) || ((emptyRow + emptyCol) + 1 === (row + col)) ) )
            return true;
        return false;
    }
    function move(tile) {
        if(movable(tile)) {
            tile.style.top = (emptyRow)*100 +"px";
            tile.style.left = (emptyCol)*100 +"px";
            let tempEmptyRow = emptyRow;
            let tempEmptyCol = emptyCol;
            emptyRow = parseInt($(tile).attr('data-row'));
            emptyCol = parseInt($(tile).attr('data-col'));
            $(tile).attr('data-row', tempEmptyRow);
            $(tile).attr('data-col', tempEmptyCol);
            $(tile).attr('id', "tile-"+tempEmptyRow+"_"+tempEmptyCol);
        }
    }

    function shuffle() {
        let movable = Array();
        for(let row = 0; row < 4; row++) {
            for(let col = 0; col < 4; col++) {
                if( (row >= emptyRow - 1 && row <= emptyRow + 1) && (col >= emptyCol - 1 && col <= emptyCol + 1) 
                && ( ((emptyRow + emptyCol) - 1 === (row + col)) || ((emptyRow + emptyCol) + 1 === (row + col)) ) )
                    movable.push({row: row, col: col});
            }
        }
        if(movable.length) {
            let tile = movable[Math.floor(Math.random() * movable.length)];
            move($("#tile-"+tile.row+"_"+tile.col).get(0));
        }
    }

    $("#shufflebutton").on('click', function() {
        for(let i = 0; i < 100; i++)
            shuffle();
    })
});