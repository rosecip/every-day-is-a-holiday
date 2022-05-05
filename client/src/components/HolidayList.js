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

  const holidayListItem = holidays.map((holiday) => {
    return <HolidayTile key={holiday.id} id={holiday.id} name={holiday.name} date={holiday.date} />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div className="holiday-list-container">
          <Link to="/new-holiday">Add a new holiday</Link>
          <div className="holiday-list">{holidayListItem}</div>
        </div>
      </div>
    </div>
  )
}

export default HolidayList
