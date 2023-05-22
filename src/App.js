import "./App.css";
import Router from "./router";
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
