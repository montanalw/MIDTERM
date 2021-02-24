function PopupUI(id="sad1", function2='PopupUI.HandleClickWrong1(this)') {
  return `
    <h2 style='
      margin-bottom: 68px;
      text-align: center;
    '    
    >Oops!<br>Wrong Answer,<br>Please Try Again!</h2>
    <div style='
      width:100%;
      height: 100%;  
      margin-bottom: 68px;
    ' id=${id}
    onclick=${function2};>
        <img style='
          display: block;
          margin: 0 auto;
        '
        src="../../images/info_girl_sad.svg" alt="wrong answer"/>
        <p style='
          width: 180px;  
          margin: 0 auto;          
          margin-top: 40px;
          text-align: center;
        '>Click me to try again!</p>
    </div>   
  `
}

// export const Popup = PopupUI();

PopupUI.HandleClickWrong1 = (el) => {
  $("#wrongAns1").hide()  
}

PopupUI.HandleClickWrong2 = (el) => {
  $("#wrongAns2").hide()  
}
