function addRow(){
    var name = document.getElementById("fname");
    var address = document.getElementById("address");
    var phoneNo= document.getElementById("phoneNo");
    var dob= document.getElementById("dob");
    var age = document.getElementById("age");
    var gender = document.getElementById("gender");

    var output = document.querySelector("#output tbody");
    output.innerHTML += "<tr><td>"+name.value+"</td><td>"+address.value+"</td><td>"+phoneNo.value+"</td><td>"+dob.value+"</td><td>"+age.value+"</td><td>"+gender.value+"</td></tr>";
    console.log(name.value);
}