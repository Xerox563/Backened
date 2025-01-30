// Import the module
const math = require("./Math");

console.log("Addition:", math.add(4, 7)); // 4 + 7 = 11
console.log("Factorial:", math.factorial(5)); // 5! = 120
console.log("Armstrong Check (153):", math.isArmstrong(153)); // true
console.log("Modulus:", math.modulus(10, 3)); // 10 % 3 = 1

/*
 * Modules in Nodejs are reusable piece of code that you can import and use in different files .
 * Instead of writing everything in file (again and again) , you can break your code into smaller files (modules) and use them where needed .
 * Why Use Modules?
✅ Organized Code – Keeps your code clean and structured.
✅ Reusability – Write once, use multiple times.
✅ Maintainability – Easy to debug and modify.
✅ Encapsulation – Keeps variables and functions private within a module.

  :: Types of Modules in Node.js
 -> Built-in Modules – Pre-installed in Node.js (e.g., fs, http, path).
 -> Custom Modules – Your own modules that you create.
 -> Third-Party Modules – Installed via NPM (e.g., express, mongoose).
 */


 
