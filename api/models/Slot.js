let mongoose = require('mongoose');

let slotSchema = mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  start_date: {
    type: Object
  },
  end_date: {
    type: OBject
  }
});

var Slot = mongoose.model('Slot', slotSchema);
module.exports = Slot;
