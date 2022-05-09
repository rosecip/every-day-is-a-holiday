import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile"
import ReviewForm from "./ReviewForm"
import translateServerErrors from "../services/translateServerErrors"

const HolidayShow = (props) => {
  const [holiday, setHoliday] = useState({
    name: "",
    date: "",
    reviews: [],
  })

  const [errors, setErrors] = useState([])
  
  const holidayId = props.match.params.id
  const fetchHoliday = async () => {
    try {
      const response = await fetch(`/api/v1/holidays/${holidayId}`)
      if (!response.ok) {
        const error = new Error(`${response.status} (${response.statusText})`)
        throw error
      }
      const responseBody = await response.json()
      setHoliday(responseBody.serializedHoliday)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchHoliday()
  }, [])

  const postReview = async (newReviews) => {
    try {                                    
      const response = await fetch(`/api/v1/holidays/${holidayId}/reviews`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newReviews),
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        const body = await response.json()
        const updatedReview = holiday.reviews.concat(body.review)
        setErrors([])
        setHoliday({ ...holiday, reviews: updatedReview })
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const reviewTiles = holiday.reviews.map((review) => {
    return <ReviewTile {...review} />
  })

  return (
    <div>
      <h1>{holiday.name}</h1>
      <h3>{holiday.date}</h3>
      <h3>Reviews</h3>
      <ReviewForm postReview={postReview} errors={errors} />
      {reviewTiles}
    </div>
  )
}

export default HolidayShow
