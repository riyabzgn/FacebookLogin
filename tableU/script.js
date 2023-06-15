
const tbody = document.getElementById("tbody");

//array values for the table
var users = [
    { name: "Riya Bazgain", address: "Bhaktapur", phoneNo: 98233765784, dob: "27/03/2002", age: 21, gender: "Female" },
    { name: "Pritha Shrestha", address: "Baneshwor", phoneNo: 9803684576, dob: "01/01/2000", age: 22, gender: "Female" },
    { name: "Sanil Manandhar", address: "Kirtipur", phoneNo: 9808723444, dob: "04/07/2001", age: 21, gender: "Male" },
    { name: "Khushi Lamichanney ", address: "Gangtok", phoneNo: 980895678, dob: "02/07/2002", age: 21, gender: "Female" }
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
            <td> <button id="deleteBtn" onclick="deleteRow(${users.indexOf(data)})">Delete</button></td>
            <td><button id="editBtn" onclick="editRow(${users.indexOf(data)})">Edit</button></td>
        `;
        tbody.appendChild(row);
    });


}
let indexEdit = -1;

function editRow(index) {
    let user = users[index];
    let form = document.getElementById("formData");
    console.log('index', index);

    indexEdit = index;

    form.name.value = user.name;
    form.address.value = user.address;
    form.phoneNo.value = user.phoneNo;
    form.dob.value = user.dob;
    form.age.value = user.age;
    form.gender.value = user.gender;
}

function userInput() {
    let form = document.getElementById("formData");
    let formData = new FormData(form);

    const inputData = {}

    for (let [key, value] of formData) {
        console.log(key, value);
        inputData[key] = value;
    }

    let newUser = inputData;

    if (indexEdit !== -1) {
        users[indexEdit] = newUser;
    } else {
        users.push(newUser);
    }

    addRow();

    form.reset();
}

function deleteRow(index) {
    users.splice(index, 1);
    addRow();
}

function filterT() {
    const searchName = document.querySelector(".searchName");
    users = users.filter((user) => user.name.toLowerCase().includes(searchName.value.toLowerCase()));
    addRow();
    console.log(users);
    if (searchName.length == 0) {
        document.getElementById("tbody").innerHTML = "User Not Found";
    }
}
addRow();