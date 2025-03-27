import React, { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";
import { Box, Typography } from "@mui/material";

const weatherBackgrounds = {
  "clear sky": "linear-gradient(to bottom, #a2c2e5, #c9e4f1)",
  "few clouds": "linear-gradient(to bottom, #d6dbe1, #a7b8cc)",
  "scattered clouds": "linear-gradient(to bottom, #b8c8d1, #93a8b7)",
  "broken clouds": "linear-gradient(to bottom, #9ca3a6, #5e6b72)",
  "shower rain": "linear-gradient(to bottom, #a1c6d7, #b7d7e5)",
  "rain": "linear-gradient(to bottom, #8ba9d3, #91bbd9)",
  "thunderstorm": "linear-gradient(to bottom, #4e5166, #6d6f76)",
  "snow": "linear-gradient(to bottom, #e0f1fb, #c9d9e7)",
  "mist": "linear-gradient(to bottom, #c5c8c9, #a8a9a8)", 
};

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [background, setBackground] = useState("linear-gradient(to bottom,rgb(76, 185, 248),rgb(0, 150, 191))"); 

  const fetchWeather = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    if (!apiKey) {
      setError("Error: Falta la clave de API.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      const description = response.data.weather[0].description.toLowerCase();
      
      setBackground(weatherBackgrounds[description] || "linear-gradient(to bottom, #9e2a56, #65285b)");

      setWeatherData({
        city: response.data.name,
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });

      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);

      if (error.response) {
        switch (error.response.status) {
          case 401:
            setError("Clave de API inválida.");
            break;
          case 404:
            setError("Ciudad no encontrada.");
            break;
          default:
            setError("Error al obtener los datos del clima.");
        }
      } else {
        setError("Error de conexión.");
      }

      setWeatherData(null);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: background,
        textAlign: "center",
        padding: 2,
      }}
    >
      <Box sx={{
        width: { xs: "280px", sm: "320px", md: "360px" }, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        margin: 0,
      }}>
        <WeatherSearch onSearch={fetchWeather} />
        {error ? (
          <Typography color="white" mt={2}>
            {error}
          </Typography>
        ) : (
          weatherData && <WeatherCard weather={weatherData} city={weatherData.city} />
        )}
      </Box>
    </Box>
  );
};

export default App;
