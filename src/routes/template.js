import {Router} from "express";
import {fetchTemplate, saveTemplate, updateTemplate} from "../controllers/template.js";

const templateRouter = Router()

templateRouter.get('/', fetchTemplate)
templateRouter.post('/', saveTemplate)
templateRouter.put('/:id', updateTemplate)

export default templateRouter