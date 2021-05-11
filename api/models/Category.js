let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = Schema({
  title: {
    type: String,
    required: true
  },
  slots: [{
    type: Schema.Types.ObjectId,
    ref: 'Slot'
  }]
});
var Category = mongoose.model('Category', categorySchema);
module.exports = Category;
