const express = require("express");
const { isAuth } = require("../../middlewares/auth.middleware");
const upload = require("../../middlewares/file");

const router = express.Router();

const {
  getAllVinos,
  getVinoByID,
  getVinojeBynombre,
  getVinoByTipo,
  createVino,
  deleteVino,
  patchVino,
} = require("../controllers/vino.controller");

router.get("/", getAllVinos);
router.get("/:id", getVinoByID);
router.get("/nombre/:nombre", getVinojeBynombre);
router.get("/tipo/:tipo", getVinoByTipo);

router.post("/", upload.single("foto"), createVino);

router.patch("/:id", patchVino);
router.delete("/:id", deleteVino);

module.exports = router;
