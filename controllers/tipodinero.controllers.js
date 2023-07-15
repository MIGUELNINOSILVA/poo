import TipoDineros from "../models/TipoDineros.js";


const getTipoDineros = async (req, res) => {
    try {
        const tipoDinero = await TipoDineros.find();
        res.json(tipoDinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const obtenerUnTipoDinero = async (req, res) => {
    try {
        const tipoDinero = await TipoDineros.findOne({ _id: req.params.id });
        res.json(tipoDinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const agregarTipoDinero = async (req, res) => {
    const tipoDinero = new TipoDineros(req.body);
    try {
        const nuevotipoDinero = await tipoDinero.save();
        res.json(nuevotipoDinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const borrarTipoDinero = async (req, res) => {
    try {
        await TipoDineros.deleteOne({ _id: req.params.id });
        res.status(200).send({
            response: "Eliminado correctamente."
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const actualizarTipoDinero = async (req, res) => {
    try {
        let updateTipoDinero = await TipoDineros.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true });
        res.json(updateTipoDinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export {
    getTipoDineros,
    obtenerUnTipoDinero,
    agregarTipoDinero,
    borrarTipoDinero,
    actualizarTipoDinero
}