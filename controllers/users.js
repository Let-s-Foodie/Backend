const Users = require("../models/users");

exports.add = async (req, res) => {
  const { email, role } = req.body;

  try {
    const user = await Users.create({ email, role })
    console.log("SUCCESS: adding new user");
    return res.status(200).json(user);
  } catch (err) {
    console.log("FAILED: adding new user");
    return res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params
  const { role } = req.body

  try {
    const user = await Users.findOne({ id })
    user.role = role
    await user.save();
    console.log("SUCCESS: updating user role or email");
    return res.status(200).json(user)
  } catch(err){
    console.log('FAILED: updating user role or email')
    return res.status(500).json(err)
  }
};
