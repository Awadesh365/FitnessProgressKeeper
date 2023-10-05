/*
    Awadesh Nautiyal
*/

//-----------Logic-------------

// Variables to store references to HTML elements
let countEl, saveEl, totalEl;

// Function to initialize references to HTML elements
function essentialFunction() {
  countEl = document.getElementById("count-el");
  saveEl = document.getElementById("save-el");
  totalEl = document.getElementById("total-el");
}

// Initialize counters for total and current count
let total = 0,
  count = 0;

// Function to increment the count
function increment() {
  essentialFunction();

  // Increment both current and total counts
  count++;
  total++;

  // Update the displayed count
  countEl.textContent = count;
}

// Function to save the current count
function save() {
  essentialFunction();

  // Format the current count as previous entry
  let previousEntries = " " + count + " " + " - ";

  // Append the previous entry to the list
  saveEl.textContent += previousEntries;

  // Log the total count to the console
  console.log(total);

  // Reset the current count and update the displayed count
  count = 0;
  countEl.textContent = 0;
}

// Function to show the total count
function showTotal() {
  essentialFunction();

  // Update the displayed total count
  totalEl.textContent = "Total Challenges Completed:-" + total;

  // Reset the current count and update the displayed count and entries
  count = 0;
  countEl.textContent = 0;
  saveEl.textContent = "Challenges Accomplished:";
}

// Function to reset and start from scratch
function letStartFromScratch() {
  // Reset current and total counts, and update displayed elements
  count = 0;
  countEl.textContent = 0;
  saveEl.textContent = "Challenges Accomplished:";
  total = 0;
  totalEl.textContent = "Total Challenges Completed:-";
}
