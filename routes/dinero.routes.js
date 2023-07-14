import { Router } from "express";
import { getDinero } from "../controllers/dinero.controllers.js";

const router = Router();

router.get('/', getDinero);



export default router;
