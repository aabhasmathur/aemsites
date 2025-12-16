export default function decorate(block) {
  const { aspectRatio, sizePreset } = block.dataset;

  if (aspectRatio) {
    block.classList.add(`aspect-${aspectRatio}`);
  }

  if (sizePreset) {
    block.classList.add(`size-${sizePreset}`);
  }

  // Remove width and height attributes from img to allow CSS aspect-ratio to work
  const img = block.querySelector('img');
  if (img) {
    img.removeAttribute('width');
    img.removeAttribute('height');
    // Set alt text if provided
    if (block.dataset.imageAlt) {
      img.setAttribute('alt', block.dataset.imageAlt);
    }
  }
}
