import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9594B5",
      light: "#B0BFD6",
      dark: "#A460A4",
      contrastText: "#F8F6F4",
    },
    secondary: {
      main: "#7C776E",
      light: "#F5F6F6",
      dark: "#364978",
      contrastText: "#000000",
    },
    background: {
      default: "#F5F6F6", 
      paper: "#ffffff", 
    },
    text: {
      text: {
        primary: "#000000", 
        secondary: "#000000", 
      },
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
    },
   
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)", 
          backdropFilter: "blur(10px)", 
          color: "white",
          border: "2px solid rgba(0, 0, 0, 0.5)", 
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)", 
          borderRadius: "10px",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px",
          backdropFilter: "blur(10px)", 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#7C776E", 
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#9594B5", 
            },
            "&:hover fieldset": {
              borderColor: "#B0BFD6",
            },
          },
        },
      },
    },
  },
});

export default theme;
