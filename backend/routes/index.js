const { Router } = require("express");
const { getAllCharacters } = require("../controllers");

const router = Router();

router.get("/characters", getAllCharacters);

module.exports = router;
