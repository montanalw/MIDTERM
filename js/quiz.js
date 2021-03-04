window.onload = function() {

  document.querySelector("#wrongAns1").style.display = "none"
  document.querySelector("#correctAns1").style.display = "none"
  document.querySelector("#wrongAns2").style.display = "none"
  document.querySelector("#correctAns2").style.display = "none"


  function question1() {
    let li = document.querySelector("#water_options").children

    for(i=0; i < li.length; i++){
      if(i<3){
        li[i].onclick = function() {
          document.querySelector("#correctAns1").style.display = "none"
          document.querySelector("#wrongAns1").style.display = "block"
          li[3].style.backgroundColor = "#fff"             
        }
      } 
      else{
        li[i].onclick = function() {
          document.querySelector("#correctAns1").style.display = "block"
          document.querySelector("#wrongAns1").style.display = "none"
          li[3].style.backgroundColor = "#D7F040"   
        }
      }
    }
  }

  function question2() {
    let li = document.querySelector("#decom_options").children

    for(i=0; i < li.length; i++){

      if(i<2 || i>2){
        li[i].onclick = function() {
          document.querySelector("#correctAns2").style.display = "none"
          document.querySelector("#wrongAns2").style.display = "block"
          li[2].style.backgroundColor = "#fff"             
        }
      }       
      else{
        li[i].onclick = function() {
          document.querySelector("#correctAns2").style.display = "block"
          document.querySelector("#wrongAns2").style.display = "none"
          li[2].style.backgroundColor = "#D7F040"   
        }
      } 
    }
  }

  function wrongAns1() {
    let girl = document.querySelector("#sad1")
    girl.onclick = function() {      
      document.querySelector("#wrongAns1").style.display = "none"
    }
  }

  function wrongAns2() {    
    let girl = document.querySelector("#sad2")
    girl.onclick = function() { 
      document.querySelector("#wrongAns2").style.display = "none"
    }
  }

  question1()
  question2()
  wrongAns1() 
  wrongAns2() 

}