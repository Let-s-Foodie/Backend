const router = require("express").Router();
const { getAll, get, add, update, remove } = require("../controllers/dishes");

// GET all dishes
router.get("/", getAll);

// GET dish
router.get("/:id", get);
// CREATE dishes
router.post("/", add);

// UPDATE dishes
router.put("/:id", update);

// DELETE dishes
router.delete("/:id", remove);

module.exports = router;
