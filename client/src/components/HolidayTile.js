import React from "react"
import { Link } from "react-router-dom"

const HolidayTile = (props) => {
  return (
    <Link to={`/holidays/${props.holiday.id}`}>
      <div className="holiday-tile">
        <div>
          <Link to={`/holidays/${props.holiday.id}`} className="holiday-name-text">
            {props.holiday.name}
          </Link>
        </div>
        <div>
          <Link to={`/holidays/${props.holiday.id}`} className="holiday-date-text">
            {props.holiday.date}
          </Link>
        </div>
        <div className="review-link">
          <Link to={`/holidays/${props.holiday.id}`} className="review-link-text">
            Reviews
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default HolidayTile
