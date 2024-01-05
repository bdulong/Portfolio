document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.name__projets');

    elements.forEach(function(element) {
        element.addEventListener('mouseover', function(event) {
            // Lisez les attributs de données de l'élément
            var previewImage = element.getAttribute('data-preview-image');
            var previewText = element.getAttribute('data-preview-text');

            // Mettez à jour l'image et le texte de la prévisualisation
            document.querySelector('.preview-image').src = previewImage;
            document.querySelector('.preview-text').textContent = previewText;

            // Affichez la prévisualisation
            document.querySelector('.preview').style.display = 'flex';
        });

        element.addEventListener('mouseout', function(event) {
            // Cachez la prévisualisation
            document.querySelector('.preview').style.display = 'none';
        });

        element.addEventListener('mousemove', function(event) {
            // Déplacez la prévisualisation à côté du curseur
            document.querySelector('.preview').style.left = (event.pageX + 15) + 'px';
            document.querySelector('.preview').style.top = (event.pageY + 15) + 'px';
        });
    });
});