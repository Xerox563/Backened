// Function to calculate factorial
function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Function to check if a number is an Armstrong number
function isArmstrong(num) {
  let sum = 0;
  let temp = num;
  const digits = num.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

// Function to find modulus
function modulus(a, b) {
  return a % b;
}

// anonymous function (Way-1)
exports.add = (a, b) => a + b;

// Exporting the functions (Way-2)
module.exports = {
  factFn: factorial,
  armFn: isArmstrong,
  modFn: modulus,
};
// Exporting the functions (Way-3)
module.exports = factorial;
