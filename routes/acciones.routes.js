import { Router } from "express";
import { getAcciones } from "../controllers/acciones.controllers.js";

const router = Router();

router.get('/', getAcciones);

export default router;