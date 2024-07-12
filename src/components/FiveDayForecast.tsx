import React from "react";
import { getWeatherIcon } from "../utils/weatherUtils";
import { Day, FiveDayForecastProps } from "../types";
import { convertTemp } from "../utils/convertTemp";

const FiveDayForecast:React.FC<FiveDayForecastProps> = ({ days, unit }) => {
	const formatDay = (dateStr:string): string => {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };
		return date.toLocaleDateString("en-US", options);
	};

	return (
		<div className="five-day-forecast flex-1  p-4 rounded-lg">
			<h3 className="text-4xl font-semibold mb-4">5 Day Forecast</h3>
			<div className="lg:grid lg:grid-cols-5 gap-4">
				{days.slice(0, 5).map((day: Day, index:number) => (
					<div
						key={index}
						className="card p-4 bg-gray-900 rounded-md mb-3"
					>
						<p className="font-semibold text-2xl">
							{formatDay(day.datetime)}
						</p>
						<img
							src={getWeatherIcon(day.conditions)}
							alt={day.conditions}
							className="mx-auto"
						/>
						<p className="mt-2 text-center">{day.conditions}</p>
						<div className="flex justify-between font-Capriola">
							<p>
								{convertTemp(day.tempmin, unit).toFixed(1)}°{unit}
							</p>
							<p>
								{convertTemp(day.tempmax, unit).toFixed(1)}°{unit}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FiveDayForecast;
