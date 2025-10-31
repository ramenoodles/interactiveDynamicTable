document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("multTable");
const table = document.createElement("table");

minCV = 0;
maxCV = 0;
minRV = 0;
maxRV = 0;
numCol = 0;
numRow = 0;

function errorMessage(message) {
    const error = document.getElementById("error");
    error.textContent = message;
    error.style.color = "red";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    table.innerHTML = "";
    errorMessage(""); 
    minCV = parseInt(document.getElementById('minColumnValue').value); 
    maxCV = parseInt(document.getElementById('maxColumnValue').value); 
    minRV = parseInt(document.getElementById('minRowValue').value); 
    maxRV = parseInt(document.getElementById('maxRowValue').value);
    if (minCV > maxCV || minRV > maxRV) {
        errorMessage("Minimum values must be less than maximum values");
        return;
    }

    if (minCV > 50 || minCV < -50 || maxCV > 50 || maxCV < -50 || minRV > 50 || minRV < -50 || maxRV > 50 || maxRV < -50) {
        errorMessage("All inputs must be within -50 to 50");
        return;
    }
    numCol = maxCV - minCV + 1;
    numRow = maxRV - minRV + 1;
    const headerRow = document.createElement("tr");
    headerRow.appendChild(document.createElement("th"));
    for (let c = minCV; c <= maxCV; c++) {
        const th = document.createElement("th");
        th.textContent = c; 
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

// Rows
    for (let r = minRV; r <= maxRV; r++) {
        const row = document.createElement("tr");
        const rowHeader = document.createElement("th");
        rowHeader.textContent = r;
        row.appendChild(rowHeader);
  
        for (let c = minCV; c <= maxCV; c++) {
            const cell = document.createElement("td");
            cell.textContent = r * c;
            row.appendChild(cell);
  }
  
        table.appendChild(row);
        }
        document.body.appendChild(table);
         
});
});


