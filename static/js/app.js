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

function handleClick() {
    let date = d3.select("#datetime").property("value");
    // Set unfiltered table to original raw data 
    let filteredData = tableData;
    // Use if statement to filter default date to only show date entered
    if (date) {
        // Apply filter to the table data to only keep rows where date matched the inputed date
        filteredData = filteredData.filter(row => row.datetime === date); 
    };
    // Rebuild the table using filtered data
    buildTable(filteredData);
};

// Listen for click event
d3.selectAll("#filter-btn").on("click", handleClick);

// Need unfiltered table to be displayed when the webpage is opened 
buildTable(tableData);
