import React, {useState} from "react"

const ReviewTile = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // console.log("Holiday Id: ", props.holidayId)
  // console.log('review id:', props.review.id)

  const deleteReview = async () => {
    try {
      const response = await fetch(
        `/api/v1/reviews/${props.id}`,
        {
          method: "delete",
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
      setShouldRedirect(true)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  let matchedFeatures = []

  // const handleSubmit = () {
  //   props.deleteReview(props.id)
  // }
  // if (props.currentUser.id === props.user.id) {
    matchedFeatures = [
      <button type="button" className="button">
        Edit
      </button>,
      <button type="button" className="button" onClick={deleteReview}>
        Delete
      </button>,
    ]
  // }


  if (shouldRedirect) {
    location.href = `/holidays/${props.holidayId}`
  }

  // console.log("Current User: ", props.user)
  // console.log("Review userId: ", props.review.user.id)
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
