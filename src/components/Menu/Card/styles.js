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
  height: "75%",
  paddingBottom:'10px',
  "@media (max-width: 992px)": {
    position: "absolute",
    width: "70%",
    height: "60%",
  },
  "@media (max-width: 576px)": {
    width: "100%",
    height: "70%",
  },
});

export const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "85%",
  height: "100%",
  boxSizing: "border-box",
});

export const StyledTextField = styled(TextField)({
  width: "100%",
  color: theme.palette.info.main,
});

export const StyledButton = styled(Button)({
  color: "white",
  width: "30%",
});

export const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  width: "100%",
});

export const StyledHeading = styled("h3")({
  fontSize: "25px",
  color: theme.palette.primary.main,
  textTransform: "capitalize",
  textAlign: "start",
  width: "100%",
  fontFamily: "Roboto Slab",
  "@media (max-width: 576px)": {
    fontSize: "22px",
    margin:0,
  },
});

export const StyledAlert = styled("p")({
  fontSize: "18px",
  textAlign: "start",
  color: theme.palette.primary.main,
  fontFamily: "Dancing Script",
  fontWeight: "800",
  width: "90%",
  "@media (max-width: 576px)": {
    fontSize: "12px",
    margin:0,
  },
});
