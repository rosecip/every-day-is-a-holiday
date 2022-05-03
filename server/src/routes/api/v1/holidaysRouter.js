import express from 'express'
import Holiday from "../../../models/Holiday.js"

const holidaysRouter = new express.Router()

holidaysRouter.get("/", async (req, res) => {
    try {
        const holidays = await Holiday.query()
        res.status(200).json({ holidays }) 
    } catch (error) {
        res.status(500).json({ error })
    }
})

export default holidaysRouter