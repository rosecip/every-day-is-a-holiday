import React from "react"
import { useState, useEffect } from "react"
import HolidayTile from "./HolidayTile"
import { Link } from "react-router-dom"

const HolidayList = (props) => {
  const [holidays, setHolidays] = useState([])

  const getHolidays = async () => {
    try {
      const response = await fetch("/api/v1/holidays")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setHolidays(responseBody.holidays)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getHolidays()
  }, [])

  const holidayListItems = holidays.map((holiday) => {
    return <HolidayTile key={holiday.id} holiday={holiday} />
  })

  return (
    <div>
      <div className="jumbotron">
        <h1 className="header">Review Your Favorite Holidays</h1>
      </div>
      <div className="page-content">
        <div className="left-side-bar">
          <div className="side-bar-image"></div>
          <p className="side-bar-info">
            <hr></hr>
            Have you ever wanted to rate and review your favorite holiday? NOW YOU CAN! Here
            at Every Day is a Holiday you can join a community to see what others think about your
            favorite (or least favorite) holidays. Don't see your favorite holiday? You can add
            your own. However, be wary that it will be available for others to review!
          </p>
        </div>
        <div className="right-side-bar">
          <div className="new-holiday">
            <Link to="/new-holiday"><i className="fa-regular fa-square-plus fa-2xl new-button"></i></Link>
            <Link to="/new-holiday" className="new-holiday-text">Add a new holiday</Link>
          </div>
          <div className="holiday-list-container">
            <div className="holiday-list">{holidayListItems}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HolidayList
