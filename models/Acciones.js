import mongoose from "mongoose";


const accionesSchema = mongoose.Schema({
        nombres: {
            type: String,
            required: true,
            trim: true
        }
}, {
    timestamp: true
});

const Acciones = mongoose.model("acciones", accionesSchema);

export default Acciones;