//Copyright Ram Senthil github @ramenoodles

document.addEventListener("DOMContentLoaded", function() { //Make sure page is loaded before running script
const form = document.getElementById("multTable");//Make form variable
const table = document.createElement("table");//Create table element

minCV = 0;
maxCV = 0;
minRV = 0;
maxRV = 0;
numCol = 0;
numRow = 0;
//Variable initialization
function errorMessage(message) {
    const error = document.getElementById("error");
    error.textContent = message;
    error.style.color = "red";
}//Function to display error messages

form.addEventListener("submit", function(event) {//Once submit button is clicked
    event.preventDefault();
    table.innerHTML = "";
    errorMessage(""); 
    //Clear previous table and error messages
    minCV = parseInt(document.getElementById('minColumnValue').value); 
    maxCV = parseInt(document.getElementById('maxColumnValue').value); 
    minRV = parseInt(document.getElementById('minRowValue').value); 
    maxRV = parseInt(document.getElementById('maxRowValue').value);
    //Pull input values from form
    if (minCV > maxCV || minRV > maxRV) {
        errorMessage("Minimum values must be less than maximum values");
        return;
    }//Check that min is less than max

    if (minCV > 50 || minCV < -50 || maxCV > 50 || maxCV < -50 || minRV > 50 || minRV < -50 || maxRV > 50 || maxRV < -50) {
        errorMessage("All inputs must be within -50 to 50");
        return;
    }//Check that inputs are within range
    numCol = maxCV - minCV + 1;
    numRow = maxRV - minRV + 1;
    //Create number of rows and columns
    const headerRow = document.createElement("tr");
    headerRow.appendChild(document.createElement("th"));
    for (let c = minCV; c <= maxCV; c++) {
        const th = document.createElement("th");
        th.textContent = c; 
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    //Make header row

    for (let r = minRV; r <= maxRV; r++) {
        const row = document.createElement("tr");
        const rowHeader = document.createElement("th");
        rowHeader.textContent = r;
        row.appendChild(rowHeader);
        //Make column header
  
        for (let c = minCV; c <= maxCV; c++) {
            const cell = document.createElement("td");
            cell.textContent = r * c;
            row.appendChild(cell);
        }//Fill in multiplication values
        table.appendChild(row);
        }//Fill in rows
        document.body.appendChild(table);
        //Update table on page
});
});


