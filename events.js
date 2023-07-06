const events = require("events");

const eventEmitter = new events.EventEmitter();

const handleAnything = () => {
  console.log("handling somethings");
};

eventEmitter.on("dhisum", handleAnything);

eventEmitter.emit("dhisum");
