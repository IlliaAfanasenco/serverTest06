import {createTemplate, getLatestTemplate, updateTemplateById} from "../models/template.js";
import Handlebars from 'handlebars'

export const VARIABLES = ["name", "email", "meal"]

export const getVariables = (req, res)=> {
    return res.json({
        variables: VARIABLES
    })
}


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

export const previewTemplate = async (req, res) => {
    try {
        const {content, variables} = req.body

        if (!content) return res.status(400).json({error: 'no content'})
        if(variables !== undefined && (typeof variables !== 'object' || variables === null)) {
            return res.status(400).json({error: 'variables type error'})
        }

        const invalidVaribals = Object.keys(variables).filter((key) => !VARIABLES.includes(key))

        if (invalidVaribals.length > 0) {return res.status(400).json({error: 'invalid variables'})}

        const template = Handlebars.compile(content)
        const html = template(variables || {})

        return res.json({html})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}