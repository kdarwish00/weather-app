import cloudyIcon from "../assets/cloudy.png";
import sunnyIcon from "../assets/sunny.png";
import rainIcon from "../assets/rain.png";
import partlyCloudyIcon from "../assets/partly-cloudy-day.png";

export const getWeatherIcon = (icon:string) => {
	switch (icon) {
		case "Partially cloudy":
			return cloudyIcon;
		case "Clear":
			return sunnyIcon;
		case "Rain, Overcast":
			return rainIcon;
		case "Rain, Partially cloudy":
			return partlyCloudyIcon;
		case "Overcast":
			return cloudyIcon;
		default:
			return ""; // Default to empty string or handle unknown icons
	}
};
