let mongoose = require('mongoose');

let categorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});
var Category = mongoose.model('Category', categorySchema);
module.exports = Category;
