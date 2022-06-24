const Vino = require("../models/vino.model");
const HTTPSTATUSCODE = require("../../utils/HTTP");

const getAllVinos = async (req, res, next) => {
  try {
    const allVinos = await Vino.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      vinos: allVinos,
    });
  } catch (error) {
    return next(error);
  }
};

const getVinoByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const vinoByID = await Vino.findById(id);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        vino: vinoByID,
      });
    } catch (error) {
      return next(error);
    }
  };



  const getVinojeBynombre = async (req, res, next) => {
    try {
      const {nombre} = req.params;
      const vinoBynombre = await Vino.findOne({nombre: nombre});
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        vino: vinoBynombre,
      });
    } catch (error) {
      return next(error);
    }
  };


  const getVinoByTipo = async (req, res, next) => {
    try {
      const {tipo} = req.params;
      const vinoByTipo = await Vino.find({tipo  : tipo});
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        vino: vinoByTipo,
      });
    } catch (error) {
      return next(error);
    }
  };

  const createVino= async (req, res, next) => {
    try {
      const newVino= new Vino(req.body);
      if (req.file) {
          newVino.foto= req.file.path;
        }
        const createdVino = await newVino.save();
        return res.json({
          status: 201,
          message: HTTPSTATUSCODE[201],
          vino: createdVino,
        });
    } catch (error) {
      return next(error);
    }
  };

  const deleteVino = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const VinoBorrado = await Vino.findByIdAndDelete(id);
  
      return res.status(200).json(VinoBorrado);
    } catch (error) {
      return next(error);
    }
  };
  
  const patchVino = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchVino = new Vino(req.body);
  
      patchVino._id = id;
  
      const VinoDB = await Vino.findByIdAndUpdate(id, patchVino);
      if (VinoDB.foto) {
          deletefile(VinoDB.foto);
      }
      if (req.file){
          patchVino.foto = req.file.path;
      }
  
      return res.status(200).json({ nuevo: patchVino, vieja: VinoDB });
    } catch (error) {
      return next(error);
    }
  };

module.exports = {
    
    getAllVinos, getVinoByID, getVinojeBynombre, getVinoByTipo, createVino, deleteVino, patchVino

   
    
};
