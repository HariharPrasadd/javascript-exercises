const add = function() {
  return [...arguments].flat().reduce((sum, num) => {return sum + num;}, 0);
};

const subtract = function() {
  return [...arguments].flat().reduce((sum, num) => {return sum - num;});
};

const sum = function() {
  return [...arguments].flat().reduce((sum, num) => {return sum + num;}, 0);
};

const multiply = function() {
  return [...arguments].flat().reduce((sum, num) => {return sum * num;}, 1);
};

const power = function() {
	return [...arguments].flat().reduce((sum, num) => {return sum**num;});
};

const factorial = function(fact) {
	let factorial = 1;
  for(let i = 1; i <= fact; i++){
    factorial *= i;
  }
  return factorial;
};

console.log(add([7]));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
