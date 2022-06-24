const Cerveza = require("../models/cerveza.model");
const HTTPSTATUSCODE = require("../../utils/HTTP");

const getAllCervezas = async (req, res, next) => {
  try {
    const allCervezas = await Cerveza.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      cervezas: allCervezas,
    });
  } catch (error) {
    return next(error);
  }
};

const getCervezaByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const cervezaID = await Cerveza.findById(id);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        cerveza: cervezaID,
      });
    } catch (error) {
      return next(error);
    }
  };



  const getCervezajeBynombre = async (req, res, next) => {
    try {
      const {nombre} = req.params;
      const cervezaBynombre = await Vino.findOne({nombre: nombre});
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        cerveza: cervezaBynombre,
      });
    } catch (error) {
      return next(error);
    }
  };


  const getCervezaByTipo = async (req, res, next) => {
    try {
      const {tipo} = req.params;
      const cervezaByTipo = await Cerveza.find({tipo  : tipo});
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        cerveza: cervezaByTipo,
      });
    } catch (error) {
      return next(error);
    }
  };

  const createCerveza = async (req, res, next) => {
    console.log(req.body)
    try {
      const newCerveza= new Cerveza(req.body);
      if (req.file) {
          newCerveza.foto= req.file.path;
        }
        const createdCerrveza = await newCerveza.save();
        return res.json({
          status: 201,
          message: HTTPSTATUSCODE[201],
          cerveza: createdCerrveza,
        });
    } catch (error) {
      return next(error);
    }
  };

  const deleteCerveza = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const CervezaBorrado = await Cerveza.findByIdAndDelete(id);
  
      return res.status(200).json(CervezaBorrado);
    } catch (error) {
      return next(error);
    }
  };
  
  const patchCerveza = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchCerveza = new Cerveza(req.body);
  
      patchCerveza._id = id;
  
      const CervezaDB = await Cerveza.findByIdAndUpdate(id, patchCerveza);
      if (CervezaDB.foto) {
          deletefile(CervezaDB.foto);
      }
      if (req.file){
          patchCerveza.foto = req.file.path;
      }
  
      return res.status(200).json({ nuevo: patchCerveza, vieja: CervezaDB });
    } catch (error) {
      return next(error);
    }
  };

module.exports = {
    
    getAllCervezas, getCervezaByID, getCervezajeBynombre, getCervezaByTipo, createCerveza, deleteCerveza, patchCerveza, 
    
};