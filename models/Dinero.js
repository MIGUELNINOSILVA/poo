import mongoose from "mongoose";

const dineroSchema = mongoose.Schema({
    moneda: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamp: true
});

const Dinero = mongoose.model("dinero", dineroSchema);

export default Dinero;