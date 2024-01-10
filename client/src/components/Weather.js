import React from "react";
import { useState } from "react";
import moment from "moment";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month.toString().length > 1 ? `${month}` : `0${month}`}-${date}`;
  }
    const today = moment();
    const weekNumber = moment(moment(today), "MM-DD-YYYY").week();
export default function Weather({weatherData, weatherDescription, cityName, weatherIcon}){
    const [dateNow] = useState(getDate());

    return(
        <div className="weatherContainer">
            <div>
            <div className="weatherDiv">
                <h4>{cityName}</h4>
                <img width='60px' src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`} alt="weatherIcon"></img>
                <h2>{weatherData}</h2>
                <small>{weatherDescription}</small>
            </div>

            </div>
            <div>
                <p>{`${dateNow} Week ${weekNumber}`}</p>
            </div>
        </div>
    )
}