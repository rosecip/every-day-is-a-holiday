import express  from "express"
import Review from "../../models/Review.js"
import { ValidationError } from "objection"
import cleanUserInput from "../../services/cleanUserInput.js"

const holidayReviewRouter = express.Router({ mergeParams: true })

holidayReviewRouter.post("/", async (req, res) => {
  const formInput = cleanUserInput(req.body)
  try {
    const newReview = await Review.query().insertAndFetch({ ...formInput, holidayId: req.params.holidayId, userId: req.user.id })                  
    res.status(201).json({review: newReview})
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ errors: error.data } )
    } else {
      console.log(error)
      res.status(500).json({ error: error })
    }
  }
})

export default holidayReviewRouter
