//a simple calculator
var firstNumber = prompt('Enter First Number');

var operator;
operator = prompt("Enter Operator ('+', '-', '*', '/', '%')");

var secondNumber;
secondNumber = prompt('Enter Second Number');

let x = parseInt(firstNumber);
let y = parseInt(secondNumber);



if (operator == '+'){
   var answer = x + y;
    alert(answer);
} else if (operator == '-'){
    var answer = x - y;
    alert(answer);
} else if (operator == '*'){
    var answer = x * y;
    alert(answer);
} else if (operator == '/'){
    var answer = x / y;
    alert(answer);
} else if (operator == '%'){
    var answer = x % y;
    alert(answer);
} else {
   alert('The operator is invalid!');
}