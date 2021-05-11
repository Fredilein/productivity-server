let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = Schema({
  title: {
    type: String,
    required: true
  },
  slot: {
    type: Schema.Types.ObjectId,
    ref: 'Slot'
  },
  completed: {
    type: Boolean,
    default: false
  },
  duration: {
    hour: Number,
    minute: Number
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;
