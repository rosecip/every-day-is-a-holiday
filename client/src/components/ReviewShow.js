import React from 'react'
import { useState } from 'react'

const ReviewShow = props => {
  const [review, setReview] = useState({})

  const fetchReview = async () => {
    try {
      const response = await fetch(`/api/v1/holidays/${holiday.id}/reviews/${props.match.params.id}`)
      if(!response.ok){
        const error = new Error(`${response.status} (${response.statusText})`)
        throw error
      }
      const reviewData = await response.json()
      setReview(reviewData.review)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }
  return (
    <h1>test</h1>
  )
}

export default ReviewShow