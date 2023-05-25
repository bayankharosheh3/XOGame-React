import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";
import theme from "../../themes/theme";

export const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

export const StyledButton = styled(Button)(({ index }) => ({
  height: "150px",
  width:"100%",
  fontSize: "6rem",
  borderRight: index % 3 === 2 ? "0px" : "4px solid #000",
  borderBottom: Math.floor(index / 3) === 2 ? "0px" : "4px solid #000",
  borderColor: theme.palette.primary.main,
  fontFamily: 'Dancing Script',
}));
