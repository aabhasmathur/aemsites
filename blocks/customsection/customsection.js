export default function decorate(block) {
  const table = block.querySelector('table');
  if (table) {
    const rows = table.querySelectorAll('tr');
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length >= 2) {
        const key = cells[0].textContent.trim().toLowerCase();
        const value = cells[1].textContent.trim().toLowerCase().replace(/\s+/g, '-');
        if (key === 'color' || key === 'size' || key === 'layout') {
          block.classList.add(value);
        }
      }
    });
    // Hide the table since it's metadata
    table.style.display = 'none';
  }
}
