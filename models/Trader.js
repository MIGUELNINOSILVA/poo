import mongoose, { mongo } from "mongoose";

const traderSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: Number,
        required: true,
        trim: true
    },
    nacionalidad: {
        type: String,
        required: true,
        trim: true
    },
    presupuesto: {
        type: Number,
        required,
        trim: true
    }
},{
    timestamp: true
});

const Trader = mongoose.model("Trader", traderSchema);

export default Trader;