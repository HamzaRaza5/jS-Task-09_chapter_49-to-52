//! QUESTION 01

let signupForm = document.getElementById("signupForm");
let outputDiv = document.getElementById("output");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(signupForm);
  let data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  outputDiv.innerHTML = `
  <h2>Form Data</h2>
  <p><strong>First Name:</strong> ${data.firstName}</p>
  <p><strong>Last Name:</strong> ${data.lastName}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Password:</strong> ${data.password}</p>`;
});

//! QUESTION 02

const readMoreBtn = document.getElementById("readMoreBtn");
const fullDetails = document.querySelector(".full-details");

readMoreBtn.addEventListener("click", function () {
  if (fullDetails.style.display === "none") {
    fullDetails.style.display = "block";
    readMoreBtn.textContent = "Read less";
  } else {
    fullDetails.style.display = "none";
    readMoreBtn.textContent = "Read more";
  }
});

//! QUESTION 03

function addStudent() {
  var table = document
    .getElementById("studentTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  cell1.innerHTML = '<input type="text" placeholder="Student Name">';
  cell2.innerHTML = '<input type="text" placeholder="Father\'s Name">';
  cell3.innerHTML = '<input type="text" placeholder="Class">';
  cell4.innerHTML = '<input type="text" placeholder="Age">';
  cell5.innerHTML = '<input type="text" placeholder="Grade">';

  cell6.innerHTML =
    ' <button onclick="deleteStudent(this)" id="delbtn">Delete</button> <button onclick="checkStudent(this)" id="addBtn">Add</button>';
}
// For Edit Details Of A student
function editStudent(button) {
  var row = button.parentNode.parentNode;
  for (var i = 0; i < 5; i++) {
    row.cells[i].innerHTML =
      '<input type="text" value="' + row.cells[i].innerText + '">';
  }
  row.cells[5].innerHTML =
    '<button onclick="cancelEdit(this)"  id="delbtn">Cancel</button> <button onclick="checkStudent(this)" id="addBtn">Add</button>';
}

// For Cancel Edit
function cancelEdit(button) {
  var row = button.parentNode.parentNode;
  for (var i = 0; i < 5; i++) {
    row.cells[i].innerHTML =
      row.cells[i].getElementsByTagName("input")[0].value;
  }
  row.cells[5].innerHTML =
    '<button onclick="editStudent(this)"  id="editbtn">Edit</button> <button onclick="deleteStudent(this)"  id="delbtn">Delete</button>';
}

// For Add Student Data
function checkStudent(button) {
  var row = button.parentNode.parentNode;
  for (var i = 0; i < 5; i++) {
    var inputValue = row.cells[i].getElementsByTagName("input")[0].value;
    row.cells[i].innerHTML = inputValue;
  }
  row.cells[5].innerHTML =
    '<button onclick="editStudent(this)"  id="editbtn">Edit</button> <button onclick="deleteStudent(this)"  id="delbtn">Delete</button>';
}

// For Del Student Data
function deleteStudent(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
