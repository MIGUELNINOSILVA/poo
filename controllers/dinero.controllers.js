import Dinero from "../models/Dinero.js";

const getDinero = async(req, res) => {
    try {
        const dinero = await Dinero.find();
        res.json(dinero);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export {
    getDinero
}