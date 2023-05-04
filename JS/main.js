if (confirm("Are you sure to delete this student?")==true) {
    txt = "You pressed OK!";
    alert("Deleted Successfully");
    self.location = "view students.html";
  } else {
    txt = "You pressed Cancel!";
    self.location = "view students.html";
  }
