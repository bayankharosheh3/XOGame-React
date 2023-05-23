import "./App.css";
import Router from "./router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
