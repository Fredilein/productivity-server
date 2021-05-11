const Task = require('../models/Task');
const Slot = require('../models/Slot');
const Category = require('../models/Category');

exports.getForDay = async (req, res) => {
  var result = { "slots": [] };
  try {
    Slot.find({ 'day': req.params.dayId }, (err, slots) => {
      slots.category = category;
      console.log(`Slots: ${slots}`);
      if (slots.length < 1) res.status(200).json(result);
      for (const slot in slots) {
        console.log(`Slot: ${slot}`);
        Category.findOne({ '_id': slot._id }, (err, category) => {
          Task.find({ 'category': category.title }, (err, tasks) => {
            var slotObj = slot;        
            slotObj.category.title = category.title;
            slotObj.tasks = tasks;
            console.log(slotObj);
            result.slots.push(slotObj);
          });
        });
      }
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getForDay = async (req, res) => {
  try {
    const slots = await Slot.find({ 'day': req.params.dayId })
                            .populate('category')
                            .populate('tasks')
                            .exec();
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json(err);
  }
};
