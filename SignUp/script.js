function validateForm() {
    var fname = document.getElementById("name");
    var uname = document.getElementById("uName");
    // var pwd = document.getElementById("pass");

    console.log("Full Name:", fname.value);
    console.log("Username:", uname.value);

    if (fname.value == '') {
        document.getElementById("error1").style.display = "block";
    }
    if (uname.value == '') {
        document.getElementById("error2").style.display = "block";
    }
    if (pwd.value == "") {
        document.getElementById("error3").style.display = "block";
    }

    //   if (fname.value == "" && uname.value == "" && pwd.value == "") {
    //     document.getElementById("error1").innerHTML = "**Name Required**";
    //     error1.style.color = "red";

    //     document.getElementById("error2").innerHTML = "**Username Required**";
    //     error2.style.color = "red";

    //     document.getElementById("error3").innerHTML = "**Password Required**";
    //     error3.style.color = "red";
    //     return false;
    //   } else if (fname.value == "" && uname.value == "") {
    //     document.getElementById("error1").innerHTML = "Name Required";
    //     error1.style.color = "red";
    //     document.getElementById("error2").innerHTML = "Username Required";
    //     error2.style.color = "red";
    //     return false;
    //   } else if (uname.value == "" && pwd.value == "") {
    //     document.getElementById("error2").innerHTML = "Username Required";
    //     error2.style.color = "red";

    //     document.getElementById("error3").innerHTML = "Password Required";
    //     error3.style.color = "red";
    //     return false;
    //   } else if (fname.value == "" && pwd.value == "") {
    //     document.getElementById("error1").innerHTML = "Name Required";
    //     error1.style.color = "red";

    //     document.getElementById("error3").innerHTML = "Password Required";
    //     error3.style.color = "red";
    //     return false;
    //   } else if (fname.value == "") {
    //     document.getElementById("error1").innerHTML = "Name Required";
    //     error1.style.color = "red";
    //     return false;
    //   } else if (uname.value == "") {
    //     document.getElementById("error2").innerHTML = "Username Required";
    //     error2.style.color = "red";
    //     return false;
    //   } else if (pwd.value == "") {
    //     document.getElementById("error3").innerHTML = "Password Required";
    //     error3.style.color = "red";
    //     return false;
    //   } else {
    //     // console.log(fname.value);
    //     // console.log(uname.value);
    //     // console.log(pwd.value);
    //     return true;
    //   }
}
