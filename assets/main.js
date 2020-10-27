$(document).ready(function(){
    // cliccando sulla freccia devo scorrere le immagini

    // cliccando sulla freccia destra scorro le img in avanti

    // cliccando sulla freccia sinistra scorro le img in dietro

    //aggiungiamo lo spostamento dei pallini con l'immagine

    $('.right-arrow').click(function(){
        // var activeClass = $('current');
        var activeClass = $('img.current')

        activeClass.removeClass('current');

        var activePoint = $('.point-switcher .fas');
        activePoint.removeClass('fas');
// devo togliere la classe prima dell'if perchè altrimenti togliendola direttamente nell'if rimane 'bloccata' sull' ultimo pallino quando finiscono le immagini


/*
QUESTO .LENGTH INDICA QUANTI ELEMENTI CI SONO ALL'INTERNO DI QUELLA VAR.. E IN QUESTO CASO POSSONO ESSERE 1 OPPURE 0.. SE è UNO ALLORA LA CONDIZIONE è VERA ALTRIMENTI è FALSA.. IN QUESTO CASO SCRIVERE (activeClass.next('img').length) EQUIVALE A SCRIVERE (activeClass.next('img').length) == 1
*/
        if (activeClass.next('img').length) {
/*equivale a (activeClass.next('img').length == 1)*/
            activeClass.next('img').addClass('current');


            activePoint.addClass('far');
            activePoint.next('i').addClass('fas');
            // activePoint.next().toggleClass('fas far');

        } else {
            $('.images-container img:first-of-type').addClass('current');
            $('.point-switcher i:first-child').addClass('fas');
        }
    });

    $('.left-arrow').click(function(){
        // var activeClass = $('current');
        var activeClass = $('img.current')

        activeClass.removeClass('current');

        var activePoint = $('.point-switcher .fas');
        activePoint.removeClass('fas');

        if (activeClass.prev('img').length) {
/*equivale a (activeClass.next('img').length == 1)*/
            activeClass.prev('img').addClass('current');
            activePoint.addClass('far');
            activePoint.prev('i').addClass('fas');
        } else {
            $('.images-container img:last-of-type').addClass('current');
            $('.point-switcher i:last-child').addClass('fas');
        }
    });


});
