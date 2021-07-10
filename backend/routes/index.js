const { Router } = require("express");
const { getAllCharacters, signUp } = require("../controllers");

const router = Router();

router.post("/signUp", signUp);

router.get("/characters", getAllCharacters);

module.exports = router;
