import express  from "express"
import Review from "../../models/Review.js"
import { ValidationError } from "objection"
import cleanUserInput from "../../services/cleanUserInput.js"

const holidayReviewRouter = express.Router({ mergeParams: true })

holidayReviewRouter.post("/", async (req, res) => {
  const { reqBody } = req
  const formInput = cleanUserInput(reqBody)
  const { title, body, rating } = formInput
  const { id } = req.params
  try {
    const review = await Review.query().insertAndFetch({ title, body, rating, holidayId: id })
    res.status(201).json({ review })
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ error })
    } else {
      res.status(500).json({ error })
    }
  }
})
export default holidayReviewRouter
