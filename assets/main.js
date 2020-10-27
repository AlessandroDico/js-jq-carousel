$(document).ready(function(){
    // cliccando sulla freccia devo scorrere le immagini

    // cliccando sulla freccia destra scorro le img in avanti

    // cliccando sulla freccia sinistra scorro le img in dietro

    $('.images-container::after').click(function(){
        // var activeClass = $('current');


        $('img.current').removeClass('current');

        // activeClass.next().addClass('current');
        // console.log(activeClass);
    });


});
