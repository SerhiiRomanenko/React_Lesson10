import {createTheme} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#009999",
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
    ].join(','),
    fontSize: 12,
  },
});