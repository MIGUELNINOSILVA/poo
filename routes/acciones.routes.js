import { Router } from "express";
import { getAcciones, obtenerUnAcciones, agregarAcciones } from "../controllers/acciones.controllers.js";

const router = Router();

router.get('/', getAcciones);
router.get('/:id', obtenerUnAcciones);
router.post('/add', agregarAcciones);

export default router;