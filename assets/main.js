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


//  click sul pallino che cambia pallino e immagine

    $('.point-switcher i').click(function(){


        //  pallino corrente = a pallino con classe fas
        var pallino_corrente = $('.point-switcher i.fas');
        // tolgo la classe fas al pallino corrente e aggiungo la classe far
        pallino_corrente.removeClass('fas').addClass('far');
        // aggiungo la classe fas al pallino su cui l'utente ha cliccato
        $(this).addClass('fas');

        var activeClass = $('img.current')

        activeClass.removeClass('current');

// qua gli sto dicendo che indice_pallino è uguale all'indice (index) pallino cliccato
        var indicePallino = $(this).index();
        console.log(indicePallino);

// qua gli sto dicendo all'immagine di images-container che equivale al valore dell'indice del pallino dai la classe current
        $('.images-container img').eq(indicePallino).addClass('current');



    });





});
