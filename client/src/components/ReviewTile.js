import React, { useState } from "react"
import EditReviewForm from "./EditReviewForm"

const ReviewTile = (props) => {
  const [edit, setEdit] = useState(false)

  const handleDelete = () => {
    props.deleteReview(props.id)
  }

  const toggleEdit = () => {
    setEdit(!edit)
  }

  let matchedFeatures = []
  if (props.matchedUser) {
    matchedFeatures = [
      <button type="button" className="button sign-button edit-button" onClick={toggleEdit}>
        Edit
      </button>,
      <button type="button" className="button sign-button delete-button" onClick={handleDelete}>
        Delete
      </button>,
    ]
  }

  let editForm = ""
  if (edit) {
    editForm = (
      <div>
        <EditReviewForm
          id={props.id}
          title={props.title}
          body={props.body}
          rating={props.rating}
          editReview={props.editReview}
          toggleEdit={toggleEdit}
          errors={props.errors}
        />
      </div>
    )
  }
  return (
    <div className="review-tile">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <p>{props.rating}/5</p>
      <p>{matchedFeatures}</p>
      {editForm}
    </div>
  )
}

export default ReviewTile
