import { Router } from 'express';
import { getTipoDineros, obtenerUnTipoDinero, agregarTipoDinero, borrarTipoDinero, actualizarTipoDinero } from "../controllers/tipodinero.controllers.js";

const router = Router();

router.get("/", getTipoDineros);
router.get("/:id", obtenerUnTipoDinero);
router.post("/add", agregarTipoDinero);
router.delete("/delete/:id", borrarTipoDinero);
router.patch("/upd/:id", actualizarTipoDinero);

export default router;