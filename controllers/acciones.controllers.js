import Acciones from "../models/Acciones.js";

const getAcciones = async (req, res) => {
    try {
        const acciones = await Acciones.find();
        res.json(acciones);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const obtenerUnAcciones = async (req, res) => {
    try {
        const acciones = await Acciones.findOne({ _id: req.params.id });
        res.json(acciones);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export {
    getAcciones,
    obtenerUnAcciones
}