import { Router } from 'express';
import { getTipoDineros, obtenerUnTipoDinero, agregarTipoDinero } from "../controllers/tipodinero.controllers.js";

const router = Router();

router.get("/", getTipoDineros);
router.get("/:id", obtenerUnTipoDinero);
router.post("/add", agregarTipoDinero);

export default router;