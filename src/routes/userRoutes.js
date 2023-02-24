const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/register", userController.registerGet);
router.get("/registerS", userController.registerGet2);
router.post("/register", userController.registerPost);

module.exports = router;
