// const users = [
//     { name: "Riya", address: "Bhaktapur", phoneNo: 982367, dob: "27/03/2002", age: 21, gender: "Female" },
//     { name: "Pritha", address: "Bhaktapur", phoneNo: 982367, dob: "27/03/2002", age: 22, gender: "Female" },
//     { name: "Sanil", address: "Bhaktapur", phoneNo: 982367, dob: "27/03/2002", age: 21, gender: "Male" }
//   ];
//   drawTable(users);

//   function drawTable(users) {
//     const table = document.createElement("table");
//     const thead = document.createElement("thead");
//     const tr = document.createElement("tr");

//     const thForName = document.createElement("th");
//     thForName.innerText = "Name";

//     const thForAddress = document.createElement("th");
//     thForAddress.innerText = "Address";

//     const thForPhNo = document.createElement("th");
//     thForPhNo.innerText = "PhoneNo";

//     const thForDob = document.createElement("th");
//     thForDob.innerText = "DoB";

//     const thForAge = document.createElement("th");
//     thForAge.innerText = "Age";

//     const thForGender = document.createElement("th");
//     thForGender.innerText = "Gender";

//     tr.append(thForName, thForAddress, thForPhNo, thForDob, thForAge, thForGender);

//     thead.appendChild(tr);

//     table.appendChild(thead);

//     const tbody = document.createElement("tbody");
//     table.appendChild(tbody);
//     // for..of used here:
//     for (let user of users) {
//       const tr = document.createElement("tr");

//       const tdForName = document.createElement("td");
//       tdForName.innerText = user.name;
//       tr.appendChild(tdForName);

//       const tdForAddress = document.createElement("td");
//       tdForAddress.innerText = user.address;
//       tr.appendChild(tdForAddress);

//       const tdForPhNo = document.createElement("td");
//       tdForPhNo.innerText = user.phoneNo;
//       tr.appendChild(tdForPhNo);

//       const tdForDob = document.createElement("td");
//       tdForDob.innerText = user.dob;
//       tr.appendChild(tdForDob);

//       const tdForAge = document.createElement("td");
//       tdForAge.innerText = user.age;
//       tr.appendChild(tdForAge);

//       const tdForGender = document.createElement("td");
//       tdForGender.innerText = user.gender;
//       tr.appendChild(tdForGender); 

//       tbody.appendChild(tr);
//     }
//     result.innerText = "";
//     result.appendChild(table);
//   }