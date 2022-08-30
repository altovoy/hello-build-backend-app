const { Router } = require("express");
const { signUpUser, loginUser } = require("./controller");

const router = Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);

module.exports = router;
