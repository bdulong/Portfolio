$(document).ready(function(){
    // Pour le premier title__arrow
    $(".content__projets .projets .title__arrow").first().click(function(){
        $(".content__projets .projets .sites").toggle();
        var svg = $(this).find('svg');
        if (svg.css('transform') === 'none') {
            svg.css('transform', 'rotate(-90deg)');
        } else {
            svg.css('transform', 'none');
        }
    });

    // Pour title__arrow dans sites
    $(".content__projets .projets .sites .title__arrow").click(function(){
        $(this).siblings(".name__projets").toggle();
        var svg = $(this).find('svg');
        if (svg.css('transform') === 'none') {
            svg.css('transform', 'rotate(-90deg)');
        } else {
            svg.css('transform', 'none');
        }
    });
});