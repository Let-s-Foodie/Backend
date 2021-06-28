const { Users } = require("../models");

exports.add = async (req, res) => {
  const { email } = req.body;
 
  const { role } = req.body;
  console.log("role",role)
  console.log("email",email)
  
  try {
    const user = await Users.create({ email, role });
    console.log("SUCCESS: adding new user");
    return res.status(200).json(user);
  } catch (err) {
    console.log("FAILED: adding new user");
    return res.status(500).json(err);
  }
};
