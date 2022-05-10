import React, { useState, useEffect } from "react"

const ReviewTile = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const deleteReview = async () => {
    try {
      const response = await fetch(`/api/v1/reviews/${props.id}`, {
        method: "delete",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const respBody = await response.json()
      setShouldRedirect(true)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  let matchedFeatures = []

  if (props.match) {
    matchedFeatures = [
      <button type="button" className="button" onClick={deleteReview}>
        Delete
      </button>,
    ]
  }

  if (shouldRedirect) {
    location.href = `/holidays/${props.holidayId}`
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
