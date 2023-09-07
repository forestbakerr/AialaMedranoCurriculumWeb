/**
 * @aiala
 * 
 */

$(document).ready(function () {
    console.log('document ready!!!!!');

    //Carrousel buttons actions

    $('#personNext').click(next);
    $('#personPrevious').click(previous);
    
    function next() {
        let lastInTail= $('.tail');

        $('#carrousel').append(lastInTail[0]);

        $(lastInTail[1]).find(".card").removeClass("person-carrousel-page-focus");
        $(lastInTail[1]).find(".card").addClass("person-carrousel-page-unfocus");
        $(lastInTail[1]).find(".card").addClass("border-0");


        $(lastInTail[2]).find(".card").removeClass("person-carrousel-page-unfocus");
        $(lastInTail[2]).find(".card").removeClass("border-0");
        $(lastInTail[2]).find(".card").addClass("person-carrousel-page-focus");

    }

    function previous() {
        let firstInTail= $('.tail');

        $(firstInTail[0]).before(firstInTail[2]);

        $(firstInTail[1]).find(".card").removeClass("person-carrousel-page-focus");
        $(firstInTail[1]).find(".card").addClass("person-carrousel-page-unfocus");
        $(firstInTail[1]).find(".card").addClass("border-0");


        $(firstInTail[0]).find(".card").removeClass("person-carrousel-page-unfocus");
        $(firstInTail[0]).find(".card").removeClass("border-0");
        $(firstInTail[0]).find(".card").addClass("person-carrousel-page-focus");
     }


    /** Función para slick
    $('.person-carrousel').slick({
        centerMode: true, // Activa el modo centrado
        infinite: true, // Habilita el desplazamiento infinito
        slidesToShow: 3, // Muestra tres elementos a la vez
        centerPadding: '3', // Espaciado entre los elementos del centro
        focusOnSelect: true, // Enfoca el elemento seleccionado
        variableWidth: true, // Permite tamaños variables para los elementos
        arrows: true, //Agrega los botones de navegación
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
    }); 
    */
});