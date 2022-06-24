const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CervezaSchema = new Schema(
    {
        id:{type: String, required:true},
        tipo:{type: String, required: true},
        nombre: {type:String, required: true},
        color:{type:String, required: false},
        descripcion: {type:String, required: false},
        precio:{type:Number, required: false},
        graduacion:{type:Number, required: true},
        foto:{type:String, required: true},
        
    },
    {timestamps:true}
);

const Cerveza = mongoose.model("cervezas", CervezaSchema);

module.exports = Cerveza;