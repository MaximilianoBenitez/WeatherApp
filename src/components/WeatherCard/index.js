import React from "react";
import { Card, Typography, Box } from "@mui/material";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";

const weatherTranslations = {
  "clear sky": "Cielo despejado",
  "few clouds": "Pocas nubes",
  "scattered clouds": "Nubes dispersas",
  "broken clouds": "Nubes rotas",
  "shower rain": "Lluvia ligera",
  "rain": "Lluvia",
  "thunderstorm": "Tormenta",
  "snow": "Nieve",
  "mist": "Niebla",
};

const getWeatherIcon = (description) => {
  if (!description) return <WbCloudyIcon sx={iconStyle} />;
  const lowerDesc = description.toLowerCase();

  if (lowerDesc.includes("clear")) return <WbSunnyIcon sx={{ ...iconStyle, color: "#FFD700" }} />;
  if (lowerDesc.includes("cloud")) return <WbCloudyIcon sx={{ ...iconStyle, color: "#B0C4DE" }} />;
  if (lowerDesc.includes("snow")) return <AcUnitIcon sx={{ ...iconStyle, color: "#ADD8E6" }} />;
  
  return <WbCloudyIcon sx={iconStyle} />;
};

const iconStyle = {
  fontSize: 60,
  borderRadius: "50%", 
  backgroundColor: "white",
  padding: "5px",
};

const WeatherCard = ({ weather, city }) => {
  const translatedDescription = weatherTranslations[weather?.description.toLowerCase()] || weather?.description;

  return (
    <Card
      sx={{
        width: { xs: "280px", sm: "320px", md: "360px" },
        p: 3,
        borderRadius: 3,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        color: "text.primary",
        textAlign: "center",
      }}
    >
      {/* Nombre de la Ciudad */}
      {city && (
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            mb: 2,
            color: "text.primary",
          }}
        >
          {city}
        </Typography>
      )}

      {/* Ícono del Clima */}
      {getWeatherIcon(weather?.description)}

      {/* Temperatura y Descripción */}
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          color: "text.primary",
        }}
      >
        {weather?.temp ? `${weather.temp}°C` : "N/A"}
      </Typography>
      <Typography
        sx={{
          textTransform: "capitalize",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          color: "text.primary",
        }}
      >
        {translatedDescription ?? "Descripción no disponible"}
      </Typography>

      {/* Datos de Humedad y Viento */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        mt={2}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <WaterDropIcon
            sx={{
              color: "info.main", 
              fontSize: 40, 
              borderRadius: "50%", 
              padding: "5px",
              backgroundColor: "white",
            }}
          />
          <Typography sx={{ color: "text.primary" }}>
            {weather?.humidity ? `${weather.humidity}%` : "N/A"} Humedad
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <AirIcon
            sx={{
              color: "info.main", 
              fontSize: 40,
              borderRadius: "50%",
              padding: "5px",
              backgroundColor: "white",
            }}
          />
          <Typography sx={{ color: "text.primary" }}>
            {weather?.wind ? `${weather.wind} m/s` : "N/A"} Viento
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default WeatherCard;
