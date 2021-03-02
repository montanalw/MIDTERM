function makeVisible() {
    var x = document.getElementById("big-div");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }