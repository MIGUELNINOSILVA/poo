import { Router } from "express";
import { getTraders, obtenerUntrader, agregarTrader, borrarTrader } from "../controllers/trader.controllers.js";

const router = Router();

router.get('/', getTraders);
router.get('/one/:id', obtenerUntrader);
router.post('/add',agregarTrader);
router.delete('/delete/:id', borrarTrader);

export default router;
