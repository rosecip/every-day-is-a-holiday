import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile"

const HolidayShow = (props) => {
  const [holiday, setHoliday] = useState({
    name: "",
    date: "",
    reviews: [],
  })

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

  const reviewTiles = holiday.reviews.map((review) => {
    return <ReviewTile {...review} />
  })

  return (
    <div>
      <h1>{holiday.name}</h1>
      <h3>{holiday.date}</h3>
      <h3>Reviews</h3>
      {reviewTiles}
    </div>
  )
}

export default HolidayShow
