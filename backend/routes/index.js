const { Router } = require("express");
const { getAllCharacters, signUp, signIn } = require("../controllers");

const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.get("/characters", getAllCharacters);

module.exports = router;
