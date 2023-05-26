import styled from "@emotion/styled";
import { Button, Grid, Paper } from "@mui/material";
import theme from "../../themes/theme";

export const StyledGrid = styled(Grid)({
  width: "60%",
  "@media (max-width: 992px)": {
    width: "70%",
  },
  "@media (max-width: 576px)": {
    width: "100%",
  },
});

export const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  margin: "15px 0px",
});

export const StyledButton = styled(Button)(({ index }) => ({
  height: "100px",
  width: "100%",
  fontSize: "5rem",
  borderRight: index % 3 === 2 ? "0px" : "4px solid #000",
  borderBottom: Math.floor(index / 3) === 2 ? "0px" : "4px solid #000",
  borderColor: theme.palette.primary.main,
  fontFamily: "Dancing Script",
  borderRadius: 0,
  "@media (max-width: 992px)": {
    height: "130px",
    fontSize: "4rem",
  },
  "@media (max-width: 576px)": {
    height: "90px",
    fontSize: "3rem",
  },
  "@media (max-width: 390px)": {
    height: "69px",
    fontSize: "2.5rem",
  },
  "@media (max-width: 320px)": {
    height: "45px",
  },
}));

export const StyledNavButton = styled(Button)({
  color: "white",
  width: "30%",
});
export const ResetButton = styled(Button)({
  "@media (max-width: 576px)": {
    fontSize: ".7rem",
    width: "20%",
    padding:0,
    height: "40px",
  },

  "@media (max-width: 320px)": {
    height: "26px",
  },
});
