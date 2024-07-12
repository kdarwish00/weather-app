import { getWeatherIcon } from "../utils/weatherUtils";
import cloudyIcon from "../assets/cloudy.png";
import sunnyIcon from "../assets/sunny.png";
import rainIcon from "../assets/rain.png";
import partlyCloudyIcon from "../assets/partly-cloudy-day.png";
import { convertTemp } from "../utils/convertTemp";

describe("Get weather icon", () => {
    test("Get weather icon", () => {
        expect(getWeatherIcon("Partially cloudy")).toBe(cloudyIcon);
        expect(getWeatherIcon("Clear")).toBe(sunnyIcon);
        expect(getWeatherIcon("Rain, Overcast")).toBe(rainIcon);
        expect(getWeatherIcon("Rain, Partially cloudy")).toBe(partlyCloudyIcon);
        expect(getWeatherIcon("Overcast")).toBe(cloudyIcon);
        expect(getWeatherIcon("")).toBe("");
    })
})

describe("Convert Temperature", () => {
    test("Convert temperature from Celsius to Fahrenheit", () => {
        expect(convertTemp(20, "C")).toBe(20);
    })

    test("Convert temperature from Fahrenheit to Celsius", () => {
        expect(convertTemp(15, "F")).toBeCloseTo(59)
    })
})