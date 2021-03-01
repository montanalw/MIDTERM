function ButtonUI(mbottom="8%", mright="8%", text="20L", function1='ButtonUI.HandleClickWrong1(this)') {
  return `
    <li style='
    width: 46%;
    min-height: 4rem;
    margin-right: 8%;  
    border-radius: 20px;
    box-shadow: 5px 5px 5px -1px rgba(0,0,0,0.25);
    text-align: center;
    line-height: 4rem;
    background-color: #ffffff;
    margin-bottom: ${mbottom};
    margin-right: ${mright}; 
    '
    onclick=${function1};
    >${text}</li>
    `
}

ButtonUI.HandleClickWrong1 = (el) => {
  document.querySelector("#correctAns1").style.display = "none" 
  document.querySelector("#wrongAns1").style.display = "block"
  let li = document.querySelector("#water_options").children
  for(let i=0; i<li.length; i++) {
    li[i].style.backgroundColor = "#fff"
  }
}

ButtonUI.HandleClickRight1 = (el) => {
  document.querySelector("#correctAns1").style.display = "block" 
  document.querySelector("#wrongAns1").style.display = "none" 
  el.style.backgroundColor = "#D7F040"
}

ButtonUI.HandleClickWrong2 = (el) => {
  document.querySelector("#correctAns2").style.display = "none" 
  document.querySelector("#wrongAns2").style.display = "block" 

  let li = document.querySelector("#decom_options").children
  for(let i=0; i<li.length; i++) {
    li[i].style.backgroundColor = "#fff"
  }
}

ButtonUI.HandleClickRight2 = (el) => {
  document.querySelector("#correctAns2").style.display = "block" 
  document.querySelector("#wrongAns2").style.display = "none"
  el.style.backgroundColor = "#D7F040"
}

//export const Button = ButtonUI();