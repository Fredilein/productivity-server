let mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 *  dayjs is probably the best date/time package but is still tedious
 *  to only work with time. So start_time and end_time is currently stored
 *  in a custom object. Maybe better to later in the code convert it to a dayjs object.
 */
let slotSchema = Schema({
  category: { 
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  day: { 
    type: Number, 
    required: true 
  },
  start_time: {
    hour: Number,
    minute: Number
  },
  end_time: {
    hour: Number,
    minute: Number
  }
});

var Slot = mongoose.model('Slot', slotSchema);
module.exports = Slot;
