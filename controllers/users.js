const { Users } = require("../models");
const admin = require("../firebase/firebase.js");
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
//test firebase 
exports.loginStatus = async (req, res) => {
  console.log("test firebase")
  
  try {
    const firebaseUser = await admin
      .auth()
      .getUser("ASNaAKiQZBe3bd03dQPD2XNwdrS2")
      .then((data) => console.log("backend firebase test",data))
  } catch (err) {
    console.log("firebase test error",err)
  }
};

