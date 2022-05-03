import React from "react";

const HolidayTile = (props) => {
    
    return (
            <li> 
                {props.name}: {props.date}
            </li>
    )
} 

export default HolidayTile