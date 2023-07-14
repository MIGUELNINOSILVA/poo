import { Router } from "express";
import { getDinero, obtenerUnDinero, borrarDinero, agregarDinero } from "../controllers/dinero.controllers.js";

const router = Router();

router.get('/', getDinero);
router.get('/one/:id', obtenerUnDinero);
router.post('/add', agregarDinero);
router.delete('/delete/:id', borrarDinero)



export default router;
