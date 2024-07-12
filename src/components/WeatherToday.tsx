import React from "react";
import { getWeatherIcon } from "../utils/weatherUtils";
import { WeatherTodayProps } from "../types";
import { convertTemp } from "../utils/convertTemp";

const WeatherToday:React.FC<WeatherTodayProps> = ({ weatherData, unit }) => {
	const cityName: string = weatherData.resolvedAddress.split(",")[0];

	// Formatting today's date
	const today = new Date().toLocaleDateString("en-US", {
		weekday: "short",
		day: "numeric",
		month: "short",
	});

	return (
		<div className="weather-today max-w-md mx-auto p-4 bg-gray-900 rounded-lg shadow-md text-center">
			<h2 className="lg:text-4xl font-semibold mb-2 sm:text-2xl  text-4xl">{cityName}</h2>
			<p className="lg:text-3xl sm:text-2xl text-4xl">{today}</p>
			<img
				src={getWeatherIcon(weatherData.days[0].conditions)}
				alt={weatherData.days[0].conditions}
				className="mt-4 mx-auto w-56"
			/>
			<p className="mt-2 lg:text-5xl sm:text-2xl text-4xl">
				{convertTemp(weatherData.days[0].temp, unit).toFixed(1)}°{unit}
			</p>
			<p className="mt-2 text-2xl">{weatherData.days[0].conditions}</p>
		</div>
	);
};

export default WeatherToday;
