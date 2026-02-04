const EventEmitter = require("events");

class EM extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello!";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
}

const em = new EM();

em.on("greeting", (input) => {
  console.log("Greeting event: ", input);
});

em.greet("Kei");
