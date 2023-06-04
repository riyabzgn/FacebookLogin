function validateForm() {
    var fname = document.getElementById("fname");
    var uname = document.getElementById("uName");
    var pwd = document.getElementById("pass");
    var bday = document.getElementById("dob");
    var Gender;
    var check = document.getElementsByClassName("checkbox");
    var box;

    if (check.checked) {
        var box = "true";
    }
    if (!check.checked) {
        var box = "false";
    }

    var radioButtons = document.querySelectorAll('input[name="gender"]');
    var radioButtonChecked = false;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioButtonChecked = true;
            Gender = "true";
            break;
        }
    }

    if (!radioButtonChecked) {
        Gender = "false";
    }

    console.log("Full Name:", fname.value);
    console.log("Username:", uname.value);
    console.log("Password:", pwd.value);
    console.log("DoB: ", bday.value);
    // console.log("Gender: ", Gender.value);
    //'input[name="gender"]:checked'

    if (fname.value == "" && uname.value == "" && pwd.value == "" && bday.value == "" && Gender == "false" && box == "false") {
        document.getElementById("error1").style.display = "block";
        document.getElementById("error2").style.display = "block";
        document.getElementById("error3").style.display = "block";
        document.getElementById("error4").style.display = "block";
        document.getElementById("error5").style.display = "block";
        document.getElementById("error6").style.display = "block";
    }
    if (fname.value == "") {
        document.getElementById("error1").style.display = "block";
    }
    if (uname.value == "") {
        document.getElementById("error2").style.display = "block";
    }
    if (pwd.value == "") {
        document.getElementById("error3").style.display = "block";
    }
    if (bday.value == "") {
        document.getElementById("error4").style.display = "block";
    }
    if (Gender == "false") {
        document.getElementById("error5").style.display = "block";
    }
    if (box == "false") {
        document.getElementById("error6").style.display = "block";
    }
}