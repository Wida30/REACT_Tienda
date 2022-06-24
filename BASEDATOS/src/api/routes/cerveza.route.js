const express = require("express");
const upload = require("../../middlewares/file");

const router = express.Router();

const {
    
    getAllCervezas, getCervezaByID, getCervezajeBynombre, getCervezaByTipo, createCerveza, deleteCerveza, patchCerveza, 
    
} = require("../controllers/cerveza.controller");


router.get("/", getAllCervezas);
router.get("/:id", getCervezaByID);
router.get("/nombre/:nombre", getCervezajeBynombre);
router.get("/tipo/:tipo", getCervezaByTipo);


router.post("/", upload.single("foto"), createCerveza);

router.patch("/:id", patchCerveza);
router.delete("/:id", deleteCerveza);

module.exports = router;