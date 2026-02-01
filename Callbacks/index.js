const fs = require("fs");

function person(name, callbackFn) {
  console.log(`Hello ${name}!`);
  callbackFn();
}

function address() {
  console.log("South Africa");
}

person("Kei", address);

fs.readFile("Input.txt", "UTF8", (error, data) => {
  if (error) {
    console.log("Error reading file: ", error);
    return;
  }
  console.log(data);
});
