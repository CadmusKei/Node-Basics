const firstModule = require("./first-module");

try {
  console.log("trying to divide by 0");
  let result = firstModule.divide(1, 0);
  console.log(result);
} catch (error) {
  console.log("Caught an error", error.message);
}

// // Module Wrapper

// function(exports, require, moduke, __filename, __dirname) {
//     // module code goes here
// }
