import { Router } from "express";
import { getDinero, obtenerUnDinero, borrarDinero, agregarDinero, actualizarDinero } from "../controllers/dinero.controllers.js";

const router = Router();

router.get('/', getDinero);
router.get('/one/:id', obtenerUnDinero);
router.post('/add', agregarDinero);
router.delete('/delete/:id', borrarDinero)
router.patch('/upd/:id', actualizarDinero);


export default router;
