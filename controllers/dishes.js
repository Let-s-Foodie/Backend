const Dishes = require("../models/dishes");
const Sellers = require("../models/sellers");

exports.getAll = async (req, res) => {
  try {
    const test_dish = await Dishes.findAll({ raw: true });
    console.log("test_dish", test_dish);

    return res.status(200).json(test_dish);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getOne = async (req, res) => {
  const { dishId } = req.params;
  try {
    const dish = await Dishes.findOne({
      where: { id: dishId },
      include: [{ model: Sellers, as: "seller" }],
    });
    console.log("SUCCESS: getting dish");
    return res.status(200).json(dish);
  } catch (err) {
    console.log("FAILED: getting dish");
    return res.status(500).json(err);
  }
};

exports.add = async (req, res) => {
  try {
    const dish = await Dishes.create({ ...req.body, userId: req.userId });
    console.log("SUCCESS: adding new dish");
    return res.status(200).json(dish);
  } catch (err) {
    console.log("FAILED: adding new dish");
    return res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  const { dishId } = req.params;
  const { name, category, image } = req.body;

  try {
    const dish = await Dishes.findOne({ where: { id: dishId } });
    dish.name = name;
    dish.category = category;
    dish.image = image;
    await dish.save();
    console.log("SUCCESS: updating dish");
    return res.json(dish);
  } catch (err) {
    console.log("FAILED: updating dish");
    return res.status(500).json(err);
  }
};

exports.remove = async (req, res) => {
  const { dishId } = req.params;

  try {
    const dish = await Dishes.findOne({ where: { id: dishId } });
    await dish.destroy();
    console.log("SUCCESS: delete dish");
    return res.json(dish);
  } catch (err) {
    console.log("FAILED: delete dish");
    return res.status(500).json({ err });
  }
};
