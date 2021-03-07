
  let thread = document.getElementById("thread-click")
    thread.onclick=function()
    {
    let x = document.getElementById("big-div")
    let description = document.getElementById("unwind")
    let arrow = document.getElementById("redarrow")

    if (x.style.display === "none") {
      x.style.display = "block";
      thread.src = "images/a-images/thread illustration.svg";
      thread.style.position = "absolute";
      thread.style.top = "1645px";
      thread.style.left = "-6px";
      // thread.style.left = "25px";
      description.style.visibility = "hidden";
      arrow.style.visibility = "hidden";   

    }
    else {
      x.style.display = "none";
      thread.src = "images/a-images/thread roll.svg";
      thread.style.position = "relative";
      thread.style.top = "0";
      thread.style.left = "0";
      description.style.visibility = "visible";
      arrow.style.visibility = "visible";
    }

  }
