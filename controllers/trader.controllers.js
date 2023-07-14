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

export {
    getTraders
}