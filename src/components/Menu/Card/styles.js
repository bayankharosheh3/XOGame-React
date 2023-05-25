import styled from "@emotion/styled";
import theme from "../../../themes/theme";
import { Button, TextField } from "@mui/material";

export const Content = styled("div")({
  backgroundColor: theme.palette.info.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  width: "50%",
  height: "55%",
});

export const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "85%",
  height:"90%",
  boxSizing: "border-box",
});

export const StyledTextField = styled(TextField)({
  borderRadius: "4px",
  width: "100%",
  color:theme.palette.info.main,
});

export const StyledButton = styled(Button)({
  color: "white",
  width: "30%",
});



export const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "100%",
});

export const StyledHeading = styled("h3")({
  fontSize: "25px",
  color:theme.palette.primary.main,
  textTransform: "capitalize",
  textAlign: "start",
  width: "100%",
  fontFamily: "Roboto Slab",
});



export const StyledAlert = styled("p")({
  fontSize: "18px",
  textAlign: "start",
  color:theme.palette.primary.main,
  fontFamily: 'Dancing Script',
  fontWeight:"800",
  width:"90%",
});