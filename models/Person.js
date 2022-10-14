const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  name: {
    type: String,
  },
  salary: {
    type: Number,
  },
  approved: Boolean,
});

module.exports = Person;
