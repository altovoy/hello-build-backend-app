const { Router } = require("express");
const { signUpUser } = require("./controller");

const router = Router();

router.post("/signup", signUpUser);

module.exports = router;
