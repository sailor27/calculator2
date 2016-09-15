// Business (or back-end) logic:
var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};
// Front-end logic:
$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
	  var number1 = parseInt($("#add1").val());
	  var number2 = parseInt($("#add2").val());
	  alert(add(number1, number2));
	});
});

/*var number1 = parseInt(prompt("enter a number to subtract"));
var number2 = parseInt(prompt("enter another number to subtract"));

var result = subtract(number1, number2);


var number1 = parseInt(prompt("enter a number to multiply"));
var number2 = parseInt(prompt("enter another number to multiply"));

var result = multiply(number1, number2);




var number1 = parseInt(prompt("enter a number to divide"));
var number2 = parseInt(prompt("enter another number to divide"));

var result = divide(number1, number2);
*/
