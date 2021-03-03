function makeVisible() {
    var x = document.getElementById("big-div");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }

  }

  function bgCol() {
    var bgCol = document.getElementById("frontpage");

    if (bgCol.style.display === "block")
    {
      bgCol.style.backgroundImage = "linear-gradient(#CCE6F4, #CCE6F4, #fcdb58);"
    }
    
  }

  window.onload = bgCol