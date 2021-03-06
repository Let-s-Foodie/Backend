const router = require("express").Router();

const { upload, remove } = require("../controllers/cloudinary");
const { authCheck, adminCheck } = require("../middleware/auth");

// routes
// router.post("/uploadimages", authCheck, adminCheck, upload);
// router.post("/removeimage", authCheck, adminCheck, remove);

//upload, and remove without authCheck, or adminCheck
router.post("/uploadimages", upload);
router.post("/removeimage", remove);
module.exports = router;
