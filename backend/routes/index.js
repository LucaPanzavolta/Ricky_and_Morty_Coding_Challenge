const { Router } = require("express");
const { getAllCharacters, signUp, signIn } = require("../controllers");
const { authenticate } = require("../middlewares/authenticate.middleware");

const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.get("/characters", authenticate, getAllCharacters);

module.exports = router;
