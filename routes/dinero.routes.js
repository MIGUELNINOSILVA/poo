import { Router } from "express";
import { getDinero, obtenerUnDinero } from "../controllers/dinero.controllers.js";

const router = Router();

router.get('/', getDinero);
router.get('/one/:id', obtenerUnDinero);



export default router;
