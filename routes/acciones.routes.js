import { Router } from "express";
import { getAcciones, obtenerUnAcciones, agregarAcciones, borrarAcciones, actualizarAcciones } from "../controllers/acciones.controllers.js";

const router = Router();

router.get('/', getAcciones);
router.get('/:id', obtenerUnAcciones);
router.post('/add', agregarAcciones);
router.delete('/delete/:id', borrarAcciones);
router.patch('/upd/:id', actualizarAcciones);

export default router;