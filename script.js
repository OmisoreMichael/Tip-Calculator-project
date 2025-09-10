// my approach to the tip calculator 

//this project is meant to provide the pecentage value of whatever bill amount inputed add it to the bill amount. (so if the bill amount is 1000 and tip is 100 it should be 1100)

// it solves the problem of difficulty to analyse differient percentages of different Bill ammount

// the users ideal approach should be to input His bill amount, the tip percentage and to click calculate to solve his problem 

// understanding other approachs the user can device appart from the ideal way (right and wrong approach)

// in the users mind there should be a sense of resul he dersires tio have to aid HIM FUTHERING ON HIS DAILY ACTIVITIES


const bill =  document.getElementById("bill")
const tip =  document.getElementById("tip")
const calculate =  document.getElementById("calculate")
const total = document.getElementById("total");

// console.log( bill, tip, calculate);




calculate.addEventListener("click", calculateResult);

//calculation logic
function calculateResult() {
  const billAmount = bill.value.trim();
  const tipPercentage = tip.value;
  const totalValue = billAmount * (1 + tipPercentage/100);

  total.innerText = totalValue.toFixed(2);
  // console.log(totalValue.toFixed(2));
  
  if (!bill || !tip || tip <= 0 || bill <=0 ){
    alert("Enter a standard Value");
    return
  }



  bill.value = ""
  tip.value = ""

}


