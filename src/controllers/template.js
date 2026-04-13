import {createTemplate, getLatestTemplate, updateTemplateById} from "../models/template.js";

export const saveTemplate = async (req, res) => {
    try {
        const {content} = req.body
        if (!content) return res.status(400).json({error: 'no content'})

        const template = await createTemplate(content)
        res.status(201).json(template)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const fetchTemplate = async (req, res) => {
    try {
        const template = await getLatestTemplate()
        res.json(template)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const updateTemplate = async (req, res) => {
    try {
        const {content} = req.body
        const {id} = req.params
        if (!content) return res.status(400).json({error: 'no update content'})

        const template = await updateTemplateById(id, content)
        res.json(template)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}