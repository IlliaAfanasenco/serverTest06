import {Router} from "express";
import {fetchTemplate, previewTemplate, saveTemplate, updateTemplate} from "../controllers/template.js";

const templateRouter = Router()

templateRouter.get('/', fetchTemplate)
templateRouter.post('/', saveTemplate)
templateRouter.put('/:id', updateTemplate)
templateRouter.post('/preview', previewTemplate)

export default templateRouter