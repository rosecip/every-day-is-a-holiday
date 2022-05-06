import React from "react"

const ReviewTile = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <p>{props.rating}/5</p>
    </div>
  )
}

export default ReviewTile