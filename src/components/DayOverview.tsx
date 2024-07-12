import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { DayOverviewProps } from "../types";
import { convertTemp } from "../utils/convertTemp";

const DayOverview: React.FC<DayOverviewProps> = ({ day, unit }) => {
	const { humidity, cloudcover, tempmin, tempmax, sunrise, sunset } = day;

	// Function to format time to HH:MM format
	const formatTime = (timeString:string): string => {
		// Split the time string into hours, minutes, and seconds
		const [hours, minutes] = timeString.split(":");
		return `${hours}:${minutes}`;
	};

	return (
		<div className="day-overview flex-1 p-4 rounded-lg">
			<h2 className="text-4xl font-semibold mb-4">Day Overview</h2>
			<div className="flex flex-wrap gap-4 flex-col">
				<div className="flex flex-col gap-3 lg:flex-row">
					<div className="flex-1 bg-gray-900 text-center p-4 rounded-lg">
						<p className="text-lg font-semibold mb-3">Humidity</p>
						<p className="text-4xl mb-3">{humidity}%</p>
						<ProgressBar
							bgColor="lime"
							isLabelVisible={false}
							completed={humidity}
						/>
					</div>
					<div className="flex-1 bg-gray-900 text-center p-4 rounded-lg">
						<p className="text-lg font-semibold mb-3">
							Cloud Cover
						</p>
						<p className="text-4xl mb-3">{cloudcover}%</p>
						<ProgressBar
							bgColor="yellow"
							isLabelVisible={false}
							completed={cloudcover}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-3 lg:flex-row">
					{/* Second Row */}
					<div className="flex-1 bg-gray-900 text-center p-4 rounded-lg">
						<p className="text-lg font-semibold mb-3">Min Temp</p>
						<p className="text-4xl">
							{convertTemp(tempmin, unit).toFixed(1)}°{unit}
						</p>
					</div>
					<div className="flex-1 bg-gray-900 text-center p-4 rounded-lg">
						<p className="text-lg font-semibold mb-3">Max Temp</p>
						<p className="text-4xl">
							{convertTemp(tempmax, unit).toFixed(1)}°{unit}
						</p>
					</div>
					<div className="flex-1 bg-gray-900 text-center p-4 rounded-lg">
						<p className="text-lg font-semibold mb-3">Sunrise</p>
						<p className="text-4xl">{formatTime(sunrise)}</p>
					</div>
					<div className="flex-1 bg-gray-900 text-center p-4 rounded-lg">
						<p className="text-lg font-semibold mb-3">Sunset</p>
						<p className="text-4xl">{formatTime(sunset)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DayOverview;
