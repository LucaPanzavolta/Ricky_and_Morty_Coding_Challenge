const { Router } = require("express");
const {
  getAllCharacters,
  signUp,
  signIn,
  getFavouriteCharacters,
} = require("../controllers");
const { authenticate } = require("../middlewares/authenticate.middleware");

const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.get("/characters", authenticate, getAllCharacters);

router.get("/favouriteCharacters", authenticate, getFavouriteCharacters);

module.exports = router;
