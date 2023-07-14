import Trader from "../models/Trader.js";

const getTraders = async(req, res) => {
    try {
        const trader = await Trader.find();
        res.json(trader);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const obtenerUntrader = async (req, res) => {
    try {
        const trader = await Trader.findOne({_id: req.params.id});
        res.json(trader);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const agregarTrader = async (req, res) => {
    const trader = new Trader(req.body);
    try {
        const nuevoTrader = await trader.save();
        res.json(nuevoTrader);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const borrarTrader = async (req, res) => {
    try {
        await Trader.deleteOne({ _id: req.params.id });
        res.status(200).send({
            response: "Eliminado correctamente."
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const actualizarTrader = async (req, res) => {
    try {
        const trader = await Trader.findOne({ _id: req.params.id });
        if (req.body.nombre) {
            trader.nombre = req.body.nombre;
        }
        if (req.body.edad) {
            trader.edad = req.body.edad;
        }
        if (req.body.nacionalidad) {
            trader.nacionalidad = req.body.nacionalidad;
        }
        if (req.body.presupuesto) {
            trader.presupuesto = req.body.presupuesto;
        }
        await trader.save();
        res.send(trader);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export {
    getTraders,
    obtenerUntrader,
    agregarTrader,
    borrarTrader,
    actualizarTrader
}