import { Router } from "express";
import { getTraders } from "../controllers/trader.controllers.js";

const router = Router();

router.get('/', getTraders);



export default router;
