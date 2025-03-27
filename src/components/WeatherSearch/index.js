import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: { xs: 2, sm: 1 },
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "8px",
        borderRadius: "8px",
        backdropFilter: "blur(10px)",
        width: { xs: "280px", sm: "320px", md: "360px" },
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Ingrese ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        size="small"
        fullWidth
        sx={{
          input: { color: "text.primary" },
          "& .MuiInputLabel-root": {
            color: "text.primary",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "text.primary" },
            "&:hover fieldset": { borderColor: "text.primary" },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "secondary.main",
          width: { xs: "100%", sm: "auto" },
          mt: { xs: 1, sm: 0 },
          color: "text.primary",
          "&:hover": {
            bgcolor: "secondary.dark",
          },
        }}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default WeatherSearch;
