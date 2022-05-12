import React, { useState, useEffect } from "react"

const ReviewTile = (props) => {
  const handleDelete = () => {
    props.deleteReview(props.id)
  }

  let matchedFeatures = []
  if (props.matchedUser) {
    matchedFeatures = [
      <button type="button" className="button sign-button" onClick={handleDelete}>
        Delete
      </button>,
    ]
  }

  return (
    <div className="review-tile">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <p>{props.rating}/5</p>
      <p>{matchedFeatures}</p>
    </div>
  )
}

export default ReviewTile
