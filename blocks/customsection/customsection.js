(() => {
  document.querySelectorAll('.customsection').forEach((block) => {
    const table = block.querySelector('table');
    if (table) {
      const data = {};
      const rows = table.querySelectorAll('tr');
      rows.forEach((tr) => {
        const cells = tr.querySelectorAll('td');
        if (cells.length >= 2) {
          const key = cells[0].textContent.trim().toLowerCase();
          const value = cells[1].textContent.trim();
          data[key] = value;
        }
      });
      // Hide metadata table
      table.style.display = 'none';
      // Apply size and layout classes to block
      if (data.size) block.classList.add(data.size.toLowerCase().replace(/\s+/g, '-'));
      if (data.layout) block.classList.add(data.layout.toLowerCase().replace(/\s+/g, '-'));
      // Create inner text block with content and color class
      if (data.content) {
        const textBlock = document.createElement('div');
        textBlock.className = 'text block';
        const p = document.createElement('p');
        p.textContent = data.content;
        if (data.color) p.classList.add(data.color.toLowerCase().replace(/\s+/g, '-'));
        textBlock.appendChild(p);
        block.appendChild(textBlock);
      }
    }
  });
})();
