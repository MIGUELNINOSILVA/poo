import { Router } from 'express';
import { getTipoDineros } from "../controllers/tipodinero.controllers.js";

const router = Router();

router.get("/", getTipoDineros);

export default router;