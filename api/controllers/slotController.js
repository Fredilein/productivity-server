const Slot = require('../models/Slot');
const Category = require('../models/Category');

exports.allSlots = async (_, res) => {
  try {
    let slots = await Slot.find()
                          .populate({ path: 'category', select: 'title' })
                          .populate({ path: 'tasks', select: 'title completed', options: { sort: { completed: 1, created: -1 }}});
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json(err);
  }
};

// TODO Some input validation, not just here lol
exports.addSlot = async (req, res) => {
  try {
    const slot = new Slot({
      category: req.body.category,
      day: req.body.day,
      start_time: req.body.start_time,
      end_time: req.body.end_time
    });
    let newSlot = await slot.save();

    Category.update({ _id: req.body.category },
                    { $push: { slots: newSlot._id }}).exec();
    
    res.status(200).json({ data: newSlot });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
