$(document).ready(function(){
    // cliccando sulla freccia devo scorrere le immagini

    // cliccando sulla freccia destra scorro le img in avanti

    // cliccando sulla freccia sinistra scorro le img in dietro

    $('.right-arrow').click(function(){
        // var activeClass = $('current');
        var activeClass = $('img.current')

        activeClass.removeClass('current');

/*
QUESTO .LENGTH INDICA QUANTI ELEMENTI CI SONO ALL'INTERNO DI QUELLA VAR.. E IN QUESTO CASO POSSONO ESSERE 1 OPPURE 0.. SE è UNO ALLORA LA CONDIZIONE è VERA ALTRIMENTI è FALSA.. IN QUESTO CASO SCRIVERE (activeClass.next('img').length) EQUIVALE A SCRIVERE (activeClass.next('img').length) == 1
*/
        if (activeClass.next('img').length) { 
/*equivale a (activeClass.next('img').length == 1)*/
            activeClass.next('img').addClass('current');
        } else {
            $('.images-container img:first-of-type').addClass('current');
        }
    });

    $('.left-arrow').click(function(){
        // var activeClass = $('current');
        var activeClass = $('img.current')

        activeClass.removeClass('current');

        if (activeClass.prev('img').length) {
/*equivale a (activeClass.next('img').length == 1)*/
            activeClass.prev('img').addClass('current');
        } else {
            $('.images-container img:last-of-type').addClass('current');
        }
    });


});
