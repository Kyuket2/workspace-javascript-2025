// Implement a random quiz

// First Number
// 450
var num1 = Math.floor(Math.random()*200 + 300);
document.getElementById('M').textContent = num1.toString();

// Second Number
// Small one
var num2 = Math.floor(Math.random()*100 + 50);
document.getElementById('N').textContent = num2.toString();

// Third Number
var num3 = Math.floor(Math.random()*300 + 30);
document.getElementById('B').textContent = num3.toString();

// Update
//document.querySelector('input[value="1"]')
document.querySelector('input[value="4"]').nextSibling.nodeValue=num1.toString() + "-" + num2.toString() + "+" + num3.toString();

// Element -- div answer box --- Click
function changeStyle(event) {
    event.preventDefault();
    var classname = this.getAttribute('class');
    classname == "answer selected" ? this.setAttribute('class', "answer"):this.setAttribute('class', "answer selected");
    if (classname == "answer selected"){
        this.children[0].children[0].checked = false;
    } else{
        this.children[0].children[0].checked = true;
    }
}
for (var i=0; i<4; i++){
document.getElementsByClassName('answer')[i].addEventListener('click', changeStyle, false);
}

