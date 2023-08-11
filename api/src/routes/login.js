const express = require("express");
const router = express.Router();

const loginController = require("../controllers/loginController");

router.post("/entrar", loginController.login);
router.post("/cadastrar", loginController.register);

module.exports = router;