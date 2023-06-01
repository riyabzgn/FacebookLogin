function validateF() {
    var email = document.getElementById("emailId");
    var pwd = document.getElementById("password");

    console.log("Email ID:", email.value);
    console.log("Password: ", pwd.value);

    if (email.value.length < 0 && pwd.value.length < 0) {
        return true;
    }

    if (email.value == "" && pwd.value == "") {
        document.getElementById("error1").style.display = "block";
        document.getElementById("error2").style.display = "block";
        return false;
    }
    if (email.value == "") {
        document.getElementById("error1").style.display = "block";
        return false;
    }
    if (pwd.value == "") {
        document.getElementById("error2").style.display = "block";
        return false;
    }
}