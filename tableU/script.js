
const tbody = document.getElementById("tbody");

//array values for the table
const users = [
    { name: "Riya Bazgain", address: "Bhaktapur", phoneNo: 98233765784, dob: "27/03/2002", age: 21, gender: "Female" },
    { name: "Pritha Shrestha", address: "Baneshwor", phoneNo: 9803684576, dob: "01/01/2000", age: 22, gender: "Female" },
    { name: "Sanil Manandhar", address: "Kirtipur", phoneNo: 9808723444, dob: "04/07/2001", age: 21, gender: "Male" },
    { name: "Khushi Lamichanney ", address: "Gangtok", phoneNo: 980895678, dob: "02/07/2002", age: 21, gender: "Male" }
];

//this functions adds data in the table through JS
function addRow() {
    tbody.innerHTML = ""; // Clear the table body
    //optimized way of adding rows
    users.forEach((data) => {
        const row = document.createElement('tr');
        //it adds data to the specified columns
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.address}</td>
            <td>${data.phoneNo}</td>
            <td>${data.dob}</td>
            <td>${data.age}</td>
            <td>${data.gender}</td>
        `;
        tbody.appendChild(row);
    });
}
//this function takes user input and reflects it on the table
function userInput() {
    var name = document.getElementById("fname");
    var address = document.getElementById("address");
    var phoneNo = document.getElementById("phoneNo");
    var dob = document.getElementById("dob");
    var age = document.getElementById("age");
    var gender = document.getElementById("gender");

    var output = document.querySelector("#tbody");
    output.innerHTML += "<tr><td>" + name.value + "</td><td>" + address.value + "</td><td>" + phoneNo.value + "</td><td>" + dob.value + "</td><td>" + age.value + "</td><td>" + gender.value + "</td></tr>";
    console.log(name.value);
}

//This table helps filter the name list and search for the specified name
function filterTable() {
    const searchName = document.querySelector(".searchName");
    const keyword = searchName.value.toUpperCase();
    const rows = Array.from(tbody.getElementsByTagName("tr")); // Convert HTMLCollection to Array

    rows.filter((row) => {
        const nameCol = row.getElementsByTagName("td")[0];
        if (nameCol) {
            const nameValue = nameCol.textContent || nameCol.innerText;
            const nameMatch = nameValue.toUpperCase().includes(keyword);
            row.style.display = nameMatch ? "" : "none";
            return nameMatch; // Include row in filtered array if the name matches
        }
        return false; // Exclude row if there is no name column
    });
}


addRow();
