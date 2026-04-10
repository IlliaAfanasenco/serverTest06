import {Router} from "express";
import templateRouter from "./template.js";

const router = Router()

router.use('/template', templateRouter)

export default router