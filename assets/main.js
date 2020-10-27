$(document).ready(function(){
    // cliccando sulla freccia devo scorrere le immagini

    // cliccando sulla freccia destra scorro le img in avanti

    // cliccando sulla freccia sinistra scorro le img in dietro

    $('.right-arrow').click(function(){
        // var activeClass = $('current');
        var activeClass = $('img.current')
        console.log(activeClass);


        activeClass.removeClass('current');
        console.log(activeClass);

        activeClass.next().addClass('current');
        console.log(activeClass);
    });


});
