import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

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
  fontSize: "70px",
  marginBottom: "35px",
  fontWeight:"800",
  color: theme.palette.text.primary,
}));
