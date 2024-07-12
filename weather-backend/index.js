const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/weather/:location", async (req, res) => {
	const location = req.params.location;
	const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`;

	try {
		const response = await axios.get(url);
		res.json(response.data);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch weather data" });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
