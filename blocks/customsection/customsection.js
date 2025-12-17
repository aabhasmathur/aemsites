export default function decorate(block) {
  const table = block.querySelector('table');
  if (table) {
    const data = {};
    const rows = table.querySelectorAll('tr');
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length >= 2) {
        const key = cells[0].textContent.trim().toLowerCase();
        const value = cells[1].textContent.trim().toLowerCase().replace(/\s+/g, '-');
        data[key] = value;
      }
    });
    // Hide the table since it's metadata
    table.style.display = 'none';
    // Apply size and layout classes to block
    if (data.size) block.classList.add(data.size);
    if (data.layout) block.classList.add(data.layout);
    // Apply color class to block for backgrounds (gradient, bg-image)
    if (data.color && (data.color === 'gradient' || data.color === 'bg-image')) {
      block.classList.add(data.color);
    }
    // Apply color class to inner text blocks for text colors
    if (data.color && data.color !== 'gradient' && data.color !== 'bg-image') {
      block.querySelectorAll('.text.block').forEach((tb) => {
        tb.classList.add(data.color);
      });
    }
  }
}
