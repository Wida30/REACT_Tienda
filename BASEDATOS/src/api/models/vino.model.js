const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VinoSchema = new Schema(
    {
        id:{type: String, required:true},
        tipo:{type: String, required: true},
        nombre: {type:String, required: true},
        uva:{type:String, required: false},
        descripcion: {type:String, required: false},
        precio:{type:Number, required: false},
        añada:{type:Number, required: true},
        foto:{type:String, required: true},
        
    },
    {timestamps:true}
);

const Vino = mongoose.model("vinos", VinoSchema);

module.exports = Vino;