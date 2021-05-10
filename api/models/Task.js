let mongoose = require('mongoose');

let taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;
