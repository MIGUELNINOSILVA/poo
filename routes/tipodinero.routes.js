import { Router } from 'express';
import { getTipoDineros, obtenerUnTipoDinero } from "../controllers/tipodinero.controllers.js";

const router = Router();

router.get("/", getTipoDineros);
router.get("/:id", obtenerUnTipoDinero);

export default router;