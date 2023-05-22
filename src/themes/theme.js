import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ab3428',
    },
    secondary: {
      main: '#3b8ea5',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#fdca40',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#31393c',
      paper: '#3b8ea5',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
});

export default theme;
