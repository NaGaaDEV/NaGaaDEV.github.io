$(function() {
    $('#loading').hide();
    $('#lookup').on('click', function() {
        $.get('/dictionary', {word: $('#word').val()})
        .done((result) => {
            const rows = (typeof result == 'object') ? result : JSON.parse(result);
            rows.forEach((row, i) => {
                $('#result').append("<p>"+(i+1)+"("+row.wordtype+") "+row.definition+"</p>")
            });
        })
        .fail(() => $('#result').text("Something went wrong"));
    });

    $(document).ajaxStart(() => {
        $('#result').html('');
        $('#loading').show();
    })
    .ajaxStop(() => { $('#loading').hide() });
});