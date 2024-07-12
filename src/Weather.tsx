import React, { useState, useEffect } from "react";
import WeatherForm from "./components/WeatherSearch";
import WeatherToday from "./components/WeatherToday";
import DayOverview from "./components/DayOverview";
import FiveDayForecast from "./components/FiveDayForecast";
import { LocationType, WeatherDataInterface } from "./types";
import { weatherUrl } from "./constants/apis";

const Weather: React.FC = () => {
	const [location, setLocation] = useState<LocationType>("Worthing");
	const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>(
		null
	);
	const [error, setError] = useState<string | null>(null);
	const [unit, setUnit] = useState<string>("C");

	const toggleUnit = (): void => {
		setUnit((prevUnit: string) => (prevUnit === "C" ? "F" : "C"));
	};

	const fetchWeather = async (location: LocationType) => {
		setError(null);
		try {
			const response = await fetch(weatherUrl(location));
			if (!response.ok) {
				throw new Error(
					"That input didn't work. Maybe it's been swept away by a tornado🌪️. Please re-enter!"
				);
			}
			const data: WeatherDataInterface = await response.json();
			console.log(data);
			setWeatherData(data);
		} catch (err: any) {
			setError(err.message);
			setWeatherData(null);
		}
	};

	useEffect(() => {
		fetchWeather(location);
	}, [location]);

	return (
		<div className="sm:grid sm:grid-cols-4 sm:gap-8 p-8">
			<aside className="col-span-1 bg-gray-900 h-full flex flex-col justify-between">
				<div className="p-4 space-y-4">
					<WeatherForm
						location={location}
						setLocation={setLocation}
					/>
					{error && (
						<p className="text-red-500 text-center font-bold">
							{error}
						</p>
					)}
					{weatherData && (
						<WeatherToday weatherData={weatherData} unit={unit} />
					)}
				</div>
			</aside>

			{weatherData && (
				<main className="col-span-3 space-y-8">
					<button
						onClick={toggleUnit}
						className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Toggle to {unit === "C" ? "Fahrenheit" : "Celsius"}
					</button>
					<DayOverview day={weatherData.days[0]} unit={unit} />
					<FiveDayForecast days={weatherData.days} unit={unit} />
				</main>
			)}
		</div>
	);
};

export default Weather;
