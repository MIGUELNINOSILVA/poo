import { Router } from "express";
import { getAcciones, obtenerUnAcciones } from "../controllers/acciones.controllers.js";

const router = Router();

router.get('/', getAcciones);
router.get('/:id', obtenerUnAcciones);

export default router;