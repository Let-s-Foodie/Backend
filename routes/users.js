const router = require("express").Router();
const { add,loginStatus } = require("../controllers/users");
const { authCheck, adminCheck } = require("../middleware/auth");

//router.post("/", authCheck, adminCheck, add);
router.post("/", add);
router.get("/test",loginStatus);
module.exports = router;
