const dscc = require('dscc');

function drawViz(data) {
  const container = document.getElementById('dscc-container');
  container.innerHTML = ''; // Container leeren

  const rows = data.tables.DEFAULT;

  const table = document.createElement('table');
  rows.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell.formattedValue; // Daten einfügen
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  container.appendChild(table); // Tabelle hinzufügen
}

dscc.subscribeToData(drawViz);
