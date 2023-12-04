document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'image
    var img = document.querySelector('.title__container img');
    img.style.position = 'absolute'; // Assurez-vous que l'image est positionnée absolument

    // Définissez la vitesse de l'animation
    var speed = 1;

    // Obtenez la taille de la section
    var container = document.querySelector('.title__container');
    var containerHeight = container.offsetHeight;

    // Définissez la position initiale de l'image
    var y = 0;

    // Créez une fonction pour mettre à jour la position de l'image
    function updatePosition() {
        // Si l'image a atteint le bas de la section, réinitialisez sa position
        if (y > containerHeight) {
            y = 0 - img.offsetHeight;
        }

        // Déplacez l'image
        y += speed;
        img.style.top = y + 'px';

        // Demandez la prochaine frame d'animation
        requestAnimationFrame(updatePosition);
    }

    // Commencez l'animation
    updatePosition();
});