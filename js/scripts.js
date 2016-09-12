/*add function*/

var add = function(number1, number2) {
	return number1 + number2;
};

var number1 = parseInt(prompt("enter a number to add"));
var number2 = parseInt(prompt("enter another number to add"));

var result = add(number1, number2);

/* subtract function */

var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("enter a number to subtract"));
var number2 = parseInt(prompt("enter another number to subtract"));




/*multiply function */

var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("enter a number to multiply"));
var number2 = parseInt(prompt("enter another number to multiply"));

var result = multiply(number1, number2);


/*divide function */
var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("enter a number to divide"));
var number2 = parseInt(prompt("enter another number to divide"));

var result = divide(number1, number2);
alert(result);
