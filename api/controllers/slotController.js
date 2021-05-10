const Slot = require('../models/Slot');

exports.allSlots = async (_, res) => {
  try {
    let slots = await Slot.find();
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addSlot = async (req, res) => {
  try {
    const slot = new Slot({
      category: req.body.category
    });
    let newSlot = await slot.save();
    res.status(200).json({ data: newSlot });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
