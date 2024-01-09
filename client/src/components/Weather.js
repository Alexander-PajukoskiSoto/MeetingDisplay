import React from "react";
import { useState, useEffect } from "react";


export default function Weather({weatherData}){
    return(
        <div className="weatherContainer">
            <div>
            <div className="weatherDiv">
                <h4>New York</h4>
                <i></i>
                <h2>{weatherData}</h2>
                <small>Slight chance of rain</small>
            </div>

            </div>
            <div>
                <p>January 8 2023 || week 2</p>
            </div>
        </div>
    )
}