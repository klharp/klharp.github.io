// from data.js
// verify connection
console.log("connected to app.js");

// verify data
console.log(data);

var tableData = data;

// reference table body
var tbody = d3.select("tbody");

// use Arrow Functions to loop through the object (each dictionary) "ufo" and append to table row
// see instructor demo #3 from javascript III
// use fat arrow method to iterate over objects and then the key:value pairs
data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    // verify ufo objects
    // console.log(ufo);
  });

// form control and input
// see instructor demo #3, #8 & 9 from javascript III, demo #10 from javascript II
// Assign the data from `data.js` to a descriptive variable -- already at the begining of the file

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Get the value property of the input element
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputElement);
  console.log(inputValue);

  tbody.html("");

  // filter by input date
  var results = tableData.filter(tableData => tableData.datetime === inputValue);

  //loop through data to get results and create dynamic table
  results.forEach((UFOobject) => {
      var row = tbody.append("tr");
      Object.entries(UFOobject).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
      });
  });


}