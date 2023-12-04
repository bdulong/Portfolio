$(document).ready(function() {
    var movementStrengthX = 100; // Force du mouvement pour l'axe X
    var movementStrengthY = 200; // Force du mouvement pour l'axe Y
    var height = movementStrengthY / $(window).height();
    var width = movementStrengthX / $(window).width();

    $(".title__container").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 50;
        var newvalueY = height * pageY * -1 - 50;
        $('.title__container img').css("transform", "translate("+newvalueX+"px, "+newvalueY+"px)");
    });
});