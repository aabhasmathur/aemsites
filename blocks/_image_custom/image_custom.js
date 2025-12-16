export default function decorate(block) {
  const { color } = block.dataset;
  if (color) {
    block.classList.add(color);
  }
}
