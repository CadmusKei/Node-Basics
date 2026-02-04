const EventEmitter = require("events");

const EM = new EventEmitter();

EM.on("greet", (name) => {
  console.log("Hello", name);
});

EM.emit("greet", "Kei Farouk");
