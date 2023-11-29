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
});