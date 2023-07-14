import Dinero from "../models/Dinero.js";

const getDinero = async (req, res) => {
    try {
        const dinero = await Dinero.find();
        res.json(dinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const obtenerUnDinero = async (req, res) => {
    try {
        const dinero = await Dinero.findOne({_id: req.params.id});
        res.json(dinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export {
    getDinero,
    obtenerUnDinero
}