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


const agregarDinero = async (req, res) => {
    const dinero = new Dinero(req.body);
    try {
        const nuevoDinero = await dinero.save();
        res.json(nuevoDinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const borrarDinero = async (req, res) => {
    try {
        await Dinero.deleteOne({ _id: req.params.id });
        res.status(200).send({
            response: "Eliminado correctamente."
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const actualizarDinero = async (req, res) => {
    try {
        const dinero = await Dinero.findOne({ _id: req.params.id });
        if (req.body.moneda) {
            dinero.moneda = req.body.moneda;
        }
        await dinero.save();
        res.send(dinero);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export {
    getDinero,
    obtenerUnDinero,
    borrarDinero,
    agregarDinero,
    actualizarDinero
}