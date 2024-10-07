var express = require("express");
var router = express.Router();
const orderController = require("../controllers/AlbumController");

// Root/Index Routes
router.get("/", function (req, res, next) {
  res.json({
    message: "Call the /albums route to retrieve a list of albums",
  });
});

// get albums
router.get("/albums", orderController.index);
router.get("/albums1", orderController.index);
router.get("/albums4", orderController.index);


module.exports = router;
