import mongoose from "mongoose";

const tipoDineroSchemma = mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamp: true
});

const TipoDineros = mongoose.model("tipoDineros", tipoDineroSchemma);

export default TipoDineros;
