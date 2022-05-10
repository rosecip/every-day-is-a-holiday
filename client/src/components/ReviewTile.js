import React from "react"

const ReviewTile = (props) => {
  // const unauthenticatedListItems = [
  //   <li key="sign-in">
  //     <Link to="/user-sessions/new" className="sign-in">
  //       Sign In
  //     </Link>
  //   </li>,
  //   <li key="sign-up">
  //     <Link to="/users/new" className="button sign-button">
  //       Sign Up
  //     </Link>
  //   </li>,
  // ]

  let matchedFeatures = []

  if (props.user.id === props.review.user.id) {
    matchedFeatures = [
      <button type="button" className="button">
        Edit
      </button>,
      <button type="button" className="button" onClick={handleSubmitDelete}>
        Delete
      </button>,
    ]
  }

  console.log("Holiday Id: ", props.holidayId)
  console.log('review id:', props.review.id)

  const deleteReview = async () => {
    try {
      const response = await fetch(
        `api/v1/holidays/${props.holidayId}/reviews/${props.review.id}`,
        {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        }
      )
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const respBody = await response.json()
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  const handleSubmitDelete = () => {
    deleteReview()
  }

  console.log("Current User: ", props.user)
  console.log("Review userId: ", props.review.user.id)
  return (
    <div>
      <h3>{props.review.title}</h3>
      <p>{props.review.body}</p>
      <p>{props.review.rating}/5</p>
      <p>{matchedFeatures}</p>
    </div>
  )
}

export default ReviewTile
