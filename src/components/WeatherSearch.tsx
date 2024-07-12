import React, { useState } from "react";
import { CgArrowRight } from "react-icons/cg";
import { LocationType, WeatherSearchProps } from "../types";

const WeatherSearch:React.FC<WeatherSearchProps> = ({ location, setLocation }) => {
	const [input, setInput] = useState<LocationType>(location);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		setLocation(input);
	};
	
	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-sm mx-auto flex items-center space-x-4"
		>
			<input
				type="text"
				value={input}
				placeholder="Enter location"
				className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				type="submit"
				className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				<CgArrowRight size={24} /> {/* Adjust icon size as needed */}
			</button>
		</form>
	);
};

export default WeatherSearch;
