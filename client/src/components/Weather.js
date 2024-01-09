import React from "react";
import { useState, useEffect } from "react";


export default function Weather({weatherData, weatherDescription, cityName, weatherIcon}){
    return(
        <div className="weatherContainer">
            <div>
            <div className="weatherDiv">
                <h4>{cityName}</h4>
                <img width='60px' src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}></img>
                <h2>{weatherData}</h2>
                <small>{weatherDescription}</small>
            </div>

            </div>
            <div>
                <p>January 8 2023 || week 2</p>
            </div>
        </div>
    )
}