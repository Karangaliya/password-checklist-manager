import { createTheme } from "@mui/material/styles";

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#6f4bd6",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "48px",
          borderRadius: "14px",
          backgroundColor: "#fafafa",
          fontSize: "14px",

          "& fieldset": {
            borderColor: "#e5e5e5",
          },

          "&:hover fieldset": {
            borderColor: "#c7c7c7",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#6f4bd6",
            borderWidth: "1.5px",
          },
        },
        input: {
          padding: "12px 14px",
          paddingLeft: "5px",
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #eef5ff inset",
            WebkitTextFillColor: "#000",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          marginRight: "0px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          color: "#9a9a9a",

          "&.Mui-focused": {
            color: "#6f4bd6",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "11px",
          marginLeft: "4px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#6f4bd6",
          padding: "6px",
          borderRadius: "8px",
          transition: "all 180ms ease-in-out",

          "&:hover": {
            backgroundColor: "rgba(111, 75, 214, 0.08)",
          },

          "&.Mui-checked": {
            color: "#6f4bd6",
            transform: "scale(1.08)",
          },

          "& .MuiSvgIcon-root": {
            fontSize: 20,
            transition: "transform 180ms ease-in-out",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          color: "#9a9a9a",

          "&::before, &::after": {
            borderColor: "#e5e5e5",
          },
        },
      },
    },
  },
});

export default MuiTheme;
