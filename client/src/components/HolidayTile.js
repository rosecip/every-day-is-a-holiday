import React from "react"
import { Link } from "react-router-dom"

const HolidayTile = (props) => {
  // const reviews = props.holiday.reviews
  // const numOfReviews = reviews.length
  return (
    <div className="holiday-tile">
      <div>
          <Link to={`/holidays/${props.holiday.id}`} className="holiday-name-text">
        {props.holiday.name}
      </Link>
      </div>
      <div>
          <Link to={`/holidays/${props.id}`} className="holiday-date-text">
        {props.holiday.date}
      </Link>
      </div>
      <div className="review-link">
      <Link to={`/holidays/${props.id}`} className="review-link-text">
        Reviews:
      </Link>
      </div>
    </div>
  )
}

export default HolidayTile
