import { Router } from "express";
import { getTraders, obtenerUntrader } from "../controllers/trader.controllers.js";

const router = Router();

router.get('/', getTraders);
router.get('/one/:id', obtenerUntrader
)


export default router;
