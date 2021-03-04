//function makeVisible() {
  let thread = document.getElementById("thread-click")
    thread.onclick=function()
    {
    let x = document.getElementById("big-div")
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }

  }
