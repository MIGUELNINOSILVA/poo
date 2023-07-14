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


export {
    getTraders,
    obtenerUntrader
}