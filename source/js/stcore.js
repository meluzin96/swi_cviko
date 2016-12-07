var galeria = galeria || {};

;(function(undefined) {

    zobrazNavstevy();
    vypisUlohy();
    showDate();

    $("#zistiMeniny").submit(function(e) {
        e.preventDefault();
        getDateOrName($(this).find('#meninyVstup').val())
        return false;
    });

    new WOW().init();

}).call(galeria);
