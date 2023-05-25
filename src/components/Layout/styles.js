import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import theme from "../../themes/theme";

export const StyledLayout = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "85px",
  marginBottom: "35px",
  fontWeight:"800",
  color: theme.palette.primary.main,
  fontFamily: 'Dancing Script',
}));

export const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  width: "80%",
  borderRadius: "4px",
  backgroundColor: theme.palette.background.paper,
});