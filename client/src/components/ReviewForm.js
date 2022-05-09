import React, { useState } from "react"
import ErrorList from "../components/layout/ErrorList"

const ReviewForm = (props) => {
  const reviewStars = ["", 1, 2, 3, 4, 5]
  const [newReviews, setReviews] = useState({
    title: "",
    body: "",
    rating: "",
  })

  const handleChange = (event) => {
    setReviews({
      ...newReviews,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const clearForm = () => {
    setReviews({
      title: "",
      body: "",
      rating: "",
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.postReview(newReviews)
    clearForm()
  }
  
  const reviewOptions = reviewStars.map((stars) => {
    return (
      <option key={stars} value={stars}>
        {stars}
      </option>
    )
  })

  return (
    <div>
      <h1>Review Form tehee!</h1>
      <div>
        <ErrorList errors={props.errors} />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleChange} value={newReviews.title} />
        </label>
        Review:
        <input type="text" name="body" onChange={handleChange} value={newReviews.body} />
        <label>
          Rating:
          <select name="rating" onChange={handleChange} value={newReviews.rating}>
            {reviewOptions}
          </select>
        </label>
        <div>
          <input type="submit" name="rating" value="Submit Review teheeee!" />
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
