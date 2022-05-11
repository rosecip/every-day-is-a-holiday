import React, { useState, useEffect } from "react"

const ReviewTile = (props) => {

    const handleDelete = () => {
    props.deleteReview(props.id)
  }

  let matchedFeatures = []

  if (props.match) {
    matchedFeatures = [
      <button type="button" className="button" onClick={handleDelete}>
        Delete
      </button>
    ]
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <p>{props.rating}/5</p>
      <p>{matchedFeatures}</p>
    </div>
  )
}

export default ReviewTile
