import express from "express"
import Holiday from "../../../models/Holiday.js"
import { ValidationError } from "objection"
import cleanUserInput from "../../../services/cleanUserInput.js"
import HolidaySerializer from "../../../serializers/HolidaySerializer.js"

const holidaysRouter = new express.Router()

holidaysRouter.get("/", async (req, res) => {
  try {
    const holidays = await Holiday.query()
    res.status(200).json({ holidays })
  } catch (error) {
    res.status(500).json({ error })
  }
})

holidaysRouter.post("/", async (req, res) => {
  const body = cleanUserInput(req.body)
  try {
    const newHoliday = await Holiday.query().insertAndFetch(body)
    res.status(201).json({ newHoliday: newHoliday })
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ errors: error.data })
    }
    res.status(500).json({ errors: error })
  }
})

holidaysRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const holiday = await Holiday.query().findById(id)
    const serializedHoliday = await HolidaySerializer.getSummary(holiday)
    res.status(200).json({ serializedHoliday })
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default holidaysRouter
