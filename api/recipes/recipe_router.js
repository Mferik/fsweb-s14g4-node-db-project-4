const router = require("express").Router();

const rcMiddleware = require("./recipe_middleware");

router.get("/:recipe_id", rcMiddleware.checkId, (req, res, next) => {
  try {
    res.json(req.currentRecipe);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  router,
};
