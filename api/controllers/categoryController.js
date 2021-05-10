const Category = require('../models/Category');

exports.allCategories = async (_, res) => {
  try {
    let categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addCategory = async (req, res) => {
  try {
    const category = new Category({
      title: req.body.title,
    });
    let newCat = await category.save();
    res.status(200).json({ data: newCat });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
