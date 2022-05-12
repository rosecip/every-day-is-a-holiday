import React from "react"
import { useState } from "react"

const EditReviewForm = (props) => {
  const [editedReview, setEditedReview] = useState({
    title: props.title,
    body: props.body,
    rating: props.rating,
  })

  const handleChange = (event) => {
    setEditedReview({
      ...editedReview,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    props.editReview(editedReview, props.id)
    props.toggleEdit()
  }

  const reviewStars = ["", 1, 2, 3, 4, 5]
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
        <h1>Edit review:</h1>
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmit} className="review-form-items">
          <label>
            Rating:
            <select name="rating" onChange={handleChange} value={editedReview.rating}>
              {reviewOptions}
            </select>
          </label>
          <label>
            Title:
            <input type="text" name="title" onChange={handleChange} value={editedReview.title} />
          </label>
          Review:
          <textarea
            id="body"
            name="body"
            rows="5"
            cols="33"
            onChange={handleChange}
            value={editedReview.body}
          />
          <div>
            <input type="submit" name="rating" value="Add Review" className="button sign-button" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditReviewForm
