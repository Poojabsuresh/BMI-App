
var height = document.getElementById("height");
var weight = document.getElementById("weight");

var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

function countBmi(){
  var p = [height.value, weight.value];

  var bmi = Number(p[1])/(Number(p[0])/100*Number(p[0])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





