import {Router} from "express";
import {fetchTemplate, saveTemplate} from "../controllers/template.js";

const templateRouter = Router()

templateRouter.get('/', fetchTemplate)
templateRouter.post('/', saveTemplate)

export default templateRouter