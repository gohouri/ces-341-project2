const router = require("express").Router();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


router.get("/", (req, res) => {
  //swagger.tags=["=Welcome!"]
  res.send("Welcome to the Astronomical API");
});

router.use("/planets", require("./planets"));
router.use("/stars", require("./stars"));

module.exports = router;