function getData() {


    var fname = document.getElementById("fname").value;
    var address = document.getElementById("address").value;
    var phoneNo = document.getElementById("phoneNo").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    localStorage.setItem("name", fname);
    localStorage.setItem("address", address);
    localStorage.setItem("phoneNo", phoneNo);
    localStorage.setItem("dob", dob);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);

    console.log("this function is being CALLED okok");
}
// Retrieve the values of other fields in a similar manner
