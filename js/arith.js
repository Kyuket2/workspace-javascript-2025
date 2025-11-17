// get the element 

// element --- property
const sE = document.getElementById('num1'); // element object
var num1 = parseInt(sE.textContent); 
var num2 = parseInt(document.getElementById('num2').textContent);
console.log("i get num1: " + num1 +" i get num 2:"+ num2);

//process
var c = num1 + num2;

//display
document.getElementById("resultDisplay").textContent = c;
