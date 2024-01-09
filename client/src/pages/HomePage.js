import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import QR from '../components/QR'
import Weather from "../components/Weather";

export default function Home() {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        fetch("/weatherApiTemp")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setWeatherData(data);
                console.log("Fetched data:", data);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }, []);

    console.log("Current weatherData:", weatherData);

    return (
        <div className="homeContainer">
            <Header />
            <QR />
            {/* Check if weatherData.main is defined before accessing temp */}
            <Weather weatherData={weatherData.main?.temp} weatherDescription={weatherData.weather[0]?.description} weatherIcon={weatherData.weather[0]?.icon} cityName={weatherData.name} />
        </div>
    );
}

// Jag ska vara ärlig. Frågade botten, hållt på hela dagen. Den ända riktiga skillnaden var frågetecknena
