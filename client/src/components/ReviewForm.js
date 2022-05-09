import React, { useState } from "react"
import ErrorList from "../components/layout/ErrorList"

const ReviewForm = (props) => {
  const reviewStars = ["", 1, 2, 3, 4, 5]
  const [newReview, setReview] = useState({
    title: "",
    body: "",
    rating: "",
  })

  const handleChange = (event) => {
    setReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const clearForm = () => {
    setReview({
      title: "",
      body: "",
      rating: "",
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.postReview(newReview)
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
          <input type="text" name="title" onChange={handleChange} value={newReview.title} />
        </label>
        Review:
        <input type="text" name="body" onChange={handleChange} value={newReview.body} />
        <label>
          Rating:
          <select name="rating" onChange={handleChange} value={newReview.rating}>
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
