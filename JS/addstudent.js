var fname=document.getElementById("fname");
var lname = document.getElementById("lname");
var id = document.getElementById("id");
var gpa = document.getElementById("GPA");
var email = document.getElementById("email");
var data = document.getElementById("data");
var phone = document.getElementById("phone");
var value = document.getElementById("value");
var hidden = document.getElementById("hideen");
console.log(fname);
console.log(lname);
console.log(id);
console.log(gpa);
console.log(email);
console.log(phone);
console.log(data);
console.log(value);
console.log(hidden);
function cheack()
{        
    let values = document.getElementById('values');
    let hidden = document.getElementById('hidden');
    values.onchange = function (){
        if(values.value == '3')
        {
            hidden.style.display ="none";
        }else{
            hidden.style.display ="inline-block";
        }
    }

}
function success() {
    if (confirm("Are you sure to add this student?") == true) {
        txt = "You pressed OK!";
        window.location.assign("/HomePage.html");
        alert("add student successfully");
    } else {
        txt = "You pressed Cancel!";
        alert("Add student failed");
    }
}