export default function decorate(block) {
  const {
    image,
    imageAlt,
    aspectRatio,
    sizePreset,
  } = block.dataset;

  // Add classes for styling
  if (aspectRatio) {
    block.classList.add(`aspect-${aspectRatio}`);
  }
  if (sizePreset) {
    block.classList.add(`size-${sizePreset}`);
  }

  // Create the picture element if image is provided
  if (image) {
    const picture = document.createElement('picture');
    const img = document.createElement('img');
    img.src = image;
    img.alt = imageAlt || '';
    img.loading = 'lazy';
    // Remove any default width/height to let CSS control aspect ratio
    picture.appendChild(img);
    block.appendChild(picture);
  }
}
