import React from 'react'
import { useState, useEffect } from 'react'
import HolidayTile from './HolidayTile'

const HolidayList = props => {

    const [holidays, setHolidays] = useState([])

    const getHolidays = async () => {
        try {
            const response = await fetch('/api/v1/holidays')
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw (error)
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
        return (
            <HolidayTile
                key={holiday.id}
                id={holiday.id}
                name={holiday.name}
                date={holiday.date}
            />
        )
    })

    return (
        <div>
            <h1>Every Day is a Holiday</h1>
            <div>
                {holidayListItem}
            </div>
        </div>
    )
}

export default HolidayList