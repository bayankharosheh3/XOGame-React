import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonList = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  width: "50%",
});

export const StyledButton = styled(Button)({
  color: "white",
  width: "70%",
});

export const StyledHeading = styled("h2")({
  fontSize: "30px",
  color: "white",
  textTransform: "uppercase",
  textAlign: "center",
  width: "70%",
  marginBottom: "50px",
});
