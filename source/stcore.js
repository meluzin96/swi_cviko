var galeria = galeria || {};

;(function(undefined) {

    zobrazNavstevy();
    vypisUlohy();
    showDate();

    var dnes = new Date();
    var den = dnes.getDate();
    var mes = dnes.getMonth()+1;

    getDateOrName(den+'.'+mes+'.');

    $("#zistiMeniny").submit(function(e) {
        e.preventDefault();
        getDateOrName($(this).find('#meninyVstup').val());
        return false;
    });

    new WOW().init();

        $('.owl-twitter').owlCarousel({
            singleItem: true,
            pagination: true
        });

    /*var fotky = document.getElementsByClassName('fotka');
    var curentPhoto = null;
    var interval = null;

    document.getElementsByClassName('sliprev')[0].addEventListener('click', predoslaFotka);


    function predoslaFotka(e) {

        curentPhoto = (curentPhoto > 0 ? curentPhoto - 1 : curentPhoto);
        zmenFotku(curentPhoto);

        e.preventDefault();
        return false;
    }*/



}).call(galeria);
