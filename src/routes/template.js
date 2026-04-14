import {Router} from "express";
import {fetchTemplate, getVariables, previewTemplate, saveTemplate, updateTemplate} from "../controllers/template.js";

const templateRouter = Router()

templateRouter.get('/', fetchTemplate)
templateRouter.post('/', saveTemplate)
templateRouter.put('/:id', updateTemplate)
templateRouter.post('/preview', previewTemplate)
templateRouter.get('/variables', getVariables)

export default templateRouter