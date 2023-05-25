import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a20021',
    },
    secondary: {
      main: '#3b8ea5',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#f5de4c',
    },
    info: {
      main: '#ffc322',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#31393c',
      paper: '#3b8ea5',
    },
    text: {
      primary: '#a20021',
      secondary: '#a20021',
    },
  },
});

export default theme;
