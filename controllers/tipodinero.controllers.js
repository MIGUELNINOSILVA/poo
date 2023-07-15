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
        const tipoDinero = await TipoDineros.findOne({_id: req.params.id});
        res.json(tipoDinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}



export {
    getTipoDineros,
    obtenerUnTipoDinero
}