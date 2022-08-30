const { Router } = require("express");
const { toggleFavoriteRepository } = require("./controller");

const router = Router();

router.post("/toggle_favorite_repo", toggleFavoriteRepository);

module.exports = router;
