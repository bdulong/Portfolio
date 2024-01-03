document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'élément avec la classe hover__name__projets
    var hoverElement = document.querySelector('.hover__name__projets');

    // Créez un nouvel élément de texte
    var textElement = document.createElement('div');
    textElement.style.position = 'absolute';
    textElement.style.background = 'black';
    textElement.style.border = '1px solid #000';
    textElement.textContent = 'Le yéti est là !';
    textElement.style.color = '#0CF25D';

    // Ajoutez des écouteurs d'événements
    hoverElement.addEventListener('mouseover', function(event) {
        document.body.appendChild(textElement);
    });

    hoverElement.addEventListener('mousemove', function(event) {
        textElement.style.left = event.pageX + 'px';
        textElement.style.top = event.pageY + 'px';
    });

    hoverElement.addEventListener('mouseout', function(event) {
        document.body.removeChild(textElement);
    });
});