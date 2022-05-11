import express from "express"
import Review from "../../../models/Review.js"

const reviewsRouter = new express.Router()

reviewsRouter.delete("/:id", async (req, res) => {
  try {
    const review = await Review.query().findById(req.params.id)
    if(req.user.id === review.userId){
      await Review.query().deleteById(req.params.id)
      res.status(200).json({ message: "This review was successfully deleted" })
    } else{
      res.status(401).json({ message: "Error: Unauthorized delete request" })
    }
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

export default reviewsRouter