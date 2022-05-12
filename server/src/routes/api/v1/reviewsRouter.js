import express from "express"
import Review from "../../../models/Review.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "objection"

const reviewsRouter = new express.Router()

reviewsRouter.delete("/:id", async (req, res) => {
  try {
    const review = await Review.query().findById(req.params.id)
    if (req.user.id === review.userId) {
      await Review.query().deleteById(req.params.id)
      res.status(200).json({ message: "This review was successfully deleted" })
    } else {
      res.status(401).json({ message: "Error: Unauthorized delete request" })
    }
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

reviewsRouter.patch("/:id", async (req, res) => {
  const { title, rating, body } = cleanUserInput(req.body)
  try {
    const reviewToEdit = await Review.query().findById(req.params.id)
    if (reviewToEdit.userId === req.user.id) {
      const updatedReview = await Review.query().updateAndFetchById(req.params.id, {
        title,
        body,
        rating,
      })
      res.status(201).json({ review: updatedReview })
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default reviewsRouter
