const thumbnails = document.querySelectorAll('.thumbnail');
const imageViewer = document.querySelector('.image-viewer');
const mainImage = document.querySelector('.main-image');
const imageDescription = document.querySelector('.image-description');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const source = thumbnail.src;
        const alt = thumbnail.alt;
        const description = alt + " description"; // Replace with actual descriptions

        mainImage.src = source;
        imageDescription.textContent = description;
        imageViewer.style.display = "block";
    });
});

window.addEventListener('click', (event) => {
    if (event.target !== imageViewer) {
        imageViewer.style.display = "none";
    }
});
