export default function decorate(block) {
  const { aspectRatio, sizePreset } = block.dataset;

  if (aspectRatio) {
    block.classList.add(`aspect-${aspectRatio}`);
  }

  if (sizePreset) {
    block.classList.add(`size-${sizePreset}`);
  }

  // Optional: If you need to decorate the image element further, add logic here
  // For example, to set alt text or apply to the img tag
  const img = block.querySelector('img');
  if (img && block.dataset.imageAlt) {
    img.setAttribute('alt', block.dataset.imageAlt);
  }
}
