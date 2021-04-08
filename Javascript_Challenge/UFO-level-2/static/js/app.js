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
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");

  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");

  console.log(inputElement1);
  console.log(inputValue1);
  console.log(inputElement2);
  console.log(inputValue2);  
  console.log(inputElement3);
  console.log(inputValue3); 
  console.log(inputElement4);
  console.log(inputValue4);  
  console.log(inputElement5);
  console.log(inputValue5);
  
  tbody.html("");

  // filter by input date
  // check if condition is met in javascript, || are used instead of python keyword "or"
  var results = tableData.filter(tableData => (tableData.datetime === inputValue1 || inputValue1 === "") && 
  (tableData.city === inputValue2  || inputValue2 === "") && 
  (tableData.state === inputValue3   || inputValue3 === "") && 
  (tableData.country === inputValue4  || inputValue4 === "") && 
  (tableData.shape === inputValue5  || inputValue5 === "")
  );

  //loop through data to get results and create dynamic table
  results.forEach((UFOobject) => {
      var row = tbody.append("tr");
      Object.entries(UFOobject).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
      });
  });


}