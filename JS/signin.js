function signup() {
    window.location.assign("../Signup.html");
}
function success() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    if (username == "admin" && password == "admin") {
        window.location.assign("/HomePage.html");
        alert("Login successfully");
    }
    else {
        alert("username or password is not true the true username and password is admin");
    }
}

