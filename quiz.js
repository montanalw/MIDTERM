window.onload = function() {

  $("#wrongAns1").hide()
  $("#correctAns1").hide()
  $("#wrongAns2").hide()
  $("#correctAns2").hide()

  // irene's js:
  var quizPanel1 = document.getElementById("jeansQuestion")
  var quizPanel2 = document.getElementById("decompQuestion")


  function question1() {
    let li = $("#water_options").children()

    for(i=0; i < li.length; i++){
      if(i<3){
        li[i].onclick = function() {
          $("#correctAns1").hide()
          $("#wrongAns1").show()
          li[3].style.backgroundColor = "#fff"   
          quizPanel1.style.visibility = "hidden";   //irenes js 
        }
      } 
      else{
        li[i].onclick = function() {
          $("#correctAns1").show()
          $("#wrongAns1").hide()
          li[3].style.backgroundColor = "#D7F040"   
          quizPanel1.style.visibility = "visible";   //irenes js 
        }
      }
    }
  }

  function question2() {
    let li = $("#decom_options").children()

    for(i=0; i < li.length; i++){

      if(i<2 || i>2){
        li[i].onclick = function() {
          $("#correctAns2").hide()
          $("#wrongAns2").show()
          li[2].style.backgroundColor = "#fff"   
          quizPanel2.style.visibility = "hidden";   //irenes js           
        }
      }       
      else{
        li[i].onclick = function() {
          $("#correctAns2").show()
          $("#wrongAns2").hide()
          li[2].style.backgroundColor = "#D7F040"  
          quizPanel2.style.visibility = "visible";   //irenes js  
        }
      } 
    }
  }

  function wrongAns1() {
    let girl = document.querySelector("#sad1")
    girl.onclick = function() {      
      $("#wrongAns1").hide()  
      quizPanel1.style.visibility = "visible";   //irenes js   
    }
  }

  function wrongAns2() {    
    let girl = document.querySelector("#sad2")
    girl.onclick = function() { 
      $("#wrongAns2").hide()
      quizPanel2.style.visibility = "visible";   //irenes js 
    }
  }

  question1()
  question2()
  wrongAns1() 
  wrongAns2() 

}

