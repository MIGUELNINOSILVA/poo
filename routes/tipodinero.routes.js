import { Router } from 'express';
import { getTipoDineros, obtenerUnTipoDinero, agregarTipoDinero,borrarTipoDinero } from "../controllers/tipodinero.controllers.js";

const router = Router();

router.get("/", getTipoDineros);
router.get("/:id", obtenerUnTipoDinero);
router.post("/add", agregarTipoDinero);
router.delete("/delete/:id", borrarTipoDinero);

export default router;