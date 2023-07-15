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

const agregarAcciones = async (req, res) => {
    const acciones = new Acciones(req.body);
    try {
        const nuevoAcciones = await acciones.save();
        res.json(nuevoAcciones);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const borrarAcciones = async (req, res) => {
    try {
        await Acciones.deleteOne({ _id: req.params.id });
        res.status(200).send({
            response: "Eliminado correctamente."
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const actualizarAcciones = async (req, res) => {
    try {
        let updateAcciones = await Acciones.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true });
        res.json(updateAcciones);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export {
    getAcciones,
    obtenerUnAcciones,
    agregarAcciones,
    borrarAcciones,
    actualizarAcciones
}