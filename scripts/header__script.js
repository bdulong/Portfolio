$(document).ready(function() {
    var header = $("header");
    var headerLink = $("a.header__link");
    var hrElement = $("hr");
  
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
  
        if (scroll >= $(".section__a-propos").offset().top) {
            header.addClass("transparent");
            headerLink.css("color", "#0A2463"); // Couleur du texte pour le lien
            hrElement.css("border-top-color", "#0A2463"); // Couleur de la bordure supérieure hr
        } else {
            header.removeClass("transparent");
            headerLink.css("color", "white"); // Réinitialise la couleur du texte pour le lien
            hrElement.css("border-top-color", "white"); // Réinitialise la couleur de la bordure supérieure hr
        }
    });
  
    // Ajouter le gestionnaire d'événements pour le style hover
    headerLink.hover(
      function() {
        $(this).css("color", "#2B92DC"); // Couleur du hover
      },
      function() {
        // Réinitialiser la couleur lorsqu'on ne survole plus le lien
        if ($(window).scrollTop() < $(".section__a-propos").offset().top) {
          $(this).css("color", "white");
        } else {
          $(this).css("color", "#0A2463"); // Couleur du texte pour le lien lorsque scroll est au-dessus de .section__a-propos
        }
      }
    );

    // Ajouter un gestionnaire d'événements pour le clic sur les sections
    headerLink.on("click", function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

        var targetSection = $($(this).attr("href"));
        
        // Ajouter une classe pour appliquer la transition
        $("html, body").animate({
        scrollTop: targetSection.offset().top
        }, 300); // Vous pouvez ajuster la vitesse de la transition ici
    });
});