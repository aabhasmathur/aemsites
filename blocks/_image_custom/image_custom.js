export default function decorate(block)
 {
  // Decorate the image_custom block
  // Since it uses the core image component, minimal decoration is needed
  // Apply the color class if specified in the data attributes
  const color = block.dataset.color;
  if (color) {
    block.classList.add(color);
  }
}