const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', () => {
    const fullImage = document.createElement('img');
    fullImage.src = image.dataset.full;
    fullImage.style.position = 'fixed';
    fullImage.style.top = 0;
    fullImage.style.left = 0;
    fullImage.style.width = '100%';
    fullImage.style.height = '100%';
    fullImage.style.zIndex = 999;

    document.body.appendChild(fullImage);

    fullImage.addEventListener('click', () => {
      fullImage.remove();
    });
  });
});
