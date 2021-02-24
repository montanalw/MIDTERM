document.querySelector("#water_options").innerHTML += ButtonUI();
document.querySelector("#water_options").innerHTML += ButtonUI("8%", "0", "200L");
document.querySelector("#water_options").innerHTML += ButtonUI("0", "8%", "2,000L");
document.querySelector("#water_options").innerHTML += ButtonUI("0", "0", "20,000L", 'ButtonUI.HandleClickRight1(this)');

document.querySelector("#decom_options").innerHTML += ButtonUI("8%", "8%", "~50 Years", 'ButtonUI.HandleClickWrong2(this)');
document.querySelector("#decom_options").innerHTML += ButtonUI("8%", "0", "~100 Years", 'ButtonUI.HandleClickWrong2(this)');
document.querySelector("#decom_options").innerHTML += ButtonUI("0", "8%", "~200 Years", 'ButtonUI.HandleClickRight2(this)');
document.querySelector("#decom_options").innerHTML += ButtonUI("0", "0", "~500 Years", 'ButtonUI.HandleClickWrong2(this)');

document.querySelector("#wrongAns1").innerHTML += PopupUI();
document.querySelector("#wrongAns2").innerHTML += PopupUI("sad2", 'PopupUI.HandleClickWrong2(this)');