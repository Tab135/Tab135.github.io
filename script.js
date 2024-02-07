document.addEventListener('DOMContentLoaded', function() {
    const overlayElements = document.querySelectorAll('.overlay');
    overlayElements.forEach(overlay => {
        overlay.addEventListener('click', () => {
            alert(overlay.textContent);
        });
    });
});
