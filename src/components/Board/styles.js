import styled from "@emotion/styled";
import theme from "../../themes/theme";
import { Button, Grid, Paper } from "@mui/material";

export const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  width: "70%",
  height: "70%",
  border: "2px solid #000",
});

export const StyledButton = styled(Button)(({ index }) => ({
  width: "200px",
  height: "150px",
  fontSize: "6rem",
  borderRight: index % 3 === 2 ? "0px" : "3px solid #000",
  borderBottom: Math.floor(index / 3) === 2 ? "0px" : "3px solid #000",
}));
