import React from "react";
import { Link } from 'react-router-dom'

const HolidayTile = (props) => {

    return (
        <div>
            <Link to={`/${props.id}`}>
                {props.name}: {props.date}
            </Link>
        </div>
    )
}

export default HolidayTile