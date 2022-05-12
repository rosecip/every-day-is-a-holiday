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
      <div className="add-review">
        <h1>Add a review:</h1>
      </div>
      <div>
        <ErrorList errors={props.errors} />
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmit} className="review-form-items review-input-bar">
        <label>
          Rating:
          <select name="rating" onChange={handleChange} value={newReview.rating}>
            {reviewOptions}
          </select>
        </label>
        <label>
          Title:
          <input type="text" name="title" onChange={handleChange} value={newReview.title} />
        </label>
        Review:
        <textarea
          id="body"
          name="body"
          rows="5"
          cols="33"
          onChange={handleChange}
          value={newReview.body}
        />
        <div>
          <input type="submit" name="rating" value="Add Review" className="button sign-button"/>
        </div>
      </form>
      </div>
    </div>
  )
}

export default ReviewForm
