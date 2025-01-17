const add = function(num1, num2) {
	return(num1+num2);
};

const subtract = function(num1, num2) {
	return(num1-num2)
};

const sum = function(array) {
  return array.reduce((total,current)=> total+current,0);
  };
	


const multiply = function(array) {
  return array.reduce((total,current)=> total*current,1);
};

const power = function(num1, num2) {
  return num1**num2;
	
};

const factorial = function(num1) {
  if (num1 === 0 || num1 === 1) return 1;
  var factNum = num1;
    while(num1>1){
      num1--;
      factNum *= num1;
    }
    return factNum;
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
