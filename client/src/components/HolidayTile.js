import React from "react";

const HolidayTile = (props) => {
    
    return (
        <div>
            <li> 
                {props.name}: {props.date}
            </li>
        </div>
    )
} 

export default HolidayTile