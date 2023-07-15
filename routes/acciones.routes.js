import { Router } from "express";
import { getAcciones, obtenerUnAcciones, agregarAcciones, borrarAcciones } from "../controllers/acciones.controllers.js";

const router = Router();

router.get('/', getAcciones);
router.get('/:id', obtenerUnAcciones);
router.post('/add', agregarAcciones);
router.delete('/delete/:id',borrarAcciones);

export default router;