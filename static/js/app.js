// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear prexisting data
    tbody.html("");
    // Loop through data, an array, using forEach
    data.forEach((dataRow) => {
        // Create variable to append row to table body 
        let row = tbody.append("tr");
        // Loop through each field in the dataRow argument
        Object.values(dataRow).forEach((val) => {
            // Append each value to a cell in the table
            let cell = row.append("td");
            cell.text(val);
        });
    });
};
