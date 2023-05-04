
function successedit() {
    if (confirm("Are you sure to add this student?") == true) {
        txt = "You pressed OK!";
        window.location.assign("/view.html");
        alert("add student successfully");
    } else {
        txt = "You pressed Cancel!";
        alert("Add student failed");
    }
}
