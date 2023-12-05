$(document).ready(function() {
  var header = $("header");
  var headerLink = $("a.header__link");
  var hrElement = $("hr");
  var headerHeight = header.outerHeight(); // Hauteur du header

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    // Si dans la section projets
    if (scroll >= $(".section__projets").offset().top - headerHeight / 3 && scroll < $(".section__projets").offset().top + $(".section__projets").height()) {
        header.css("background-color", "black"); // Change le fond du header en blanc
        headerLink.css("color", "#0CF25D"); // Couleur du texte pour le lien
        hrElement.css("border-top-color", "#0CF25D"); // Couleur de la bordure supérieure hr
    } else {
        header.css("background-color", "#0A2463"); // Réinitialise la couleur du fond du header
        headerLink.css("color", "white"); // Réinitialise la couleur du texte pour le lien
        hrElement.css("border-top-color", "white"); // Réinitialise la couleur de la bordure supérieure hr
    }
});
  
    // Ajouter le gestionnaire d'événements pour le style hover
headerLink.hover(
  function() {
    var scroll = $(window).scrollTop();
    if (scroll >= $(".section__projets").offset().top - headerHeight / 3 && scroll < $(".section__projets").offset().top + $(".section__projets").height()) {
      $(this).css("color", "11672F"); // Couleur du hover
    } else {
      $(this).css("color", "2B92DC"); // Couleur du hover
    }
  },
  function() {
    // Réinitialiser la couleur lorsqu'on ne survole plus le lien
    if ($(window).scrollTop() < $(".section__projets").offset().top || $(window).scrollTop() >= $(".section__projets").offset().top + $(".section__projets").height())  {
      $(this).css("color", "white");
    } else {
      $(this).css("color", "#0CF25D"); // Couleur du texte pour le lien lorsque scroll est au-dessus de .section__projets
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