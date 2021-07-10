const { Router } = require("express");
const {
  getAllCharacters,
  signUp,
  signIn,
  getFavouriteCharacters,
  addCharacterToFavourites,
  removeCharacterFromFavourites,
} = require("../controllers");
const { authenticate } = require("../middlewares/authenticate.middleware");

const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.get("/characters", authenticate, getAllCharacters);

router.get("/favouriteCharacters", authenticate, getFavouriteCharacters);
router.post(
  "/favouriteCharacter/:characterId",
  authenticate,
  addCharacterToFavourites
);
router.delete(
  "/favouriteCharacter/:characterId",
  authenticate,
  removeCharacterFromFavourites
);

module.exports = router;
