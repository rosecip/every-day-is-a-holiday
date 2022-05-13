import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import translateServerErrors from "../services/translateServerErrors"
import ErrorList from "./layout/ErrorList"

const NewHolidayForm = (props) => {
  const [newHoliday, setNewHoliday] = useState({
    name: "",
    date: "",
  })

  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleChange = (event) => {
    setNewHoliday({
      ...newHoliday,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const clearForm = () => {
    setNewHoliday({
      name: "",
      date: "",
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postHoliday(newHoliday)
    clearForm()
  }

  const postHoliday = async (newHoliday) => {
    try {
      const response = await fetch("/api/v1/holidays", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newHoliday),
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
        setShouldRedirect(true)
      }
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  if (shouldRedirect) {
    return <Redirect push to="/" />
  }

  return (
    <div className="grid-container sign-up-form-container">
      <div className="new-holiday-picture"></div>
      <div className="new-holiday-form">
        <h1>Add a holiday</h1>
        <ErrorList errors={errors} />
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" onChange={handleChange} value={newHoliday.name} />
          </label>

          <label>
            Date
            <input type="text" name="date" onChange={handleChange} value={newHoliday.date} />
          </label>
          <div>
            <input type="submit" value="Add Holiday" className="button sign-button"></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewHolidayForm
