import styled from "@emotion/styled";
import { Button } from "@mui/material";
import theme from "../../themes/theme";

export const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  height: "100%",
  gap: "5%",
  position:'relative'
});

export const ButtonList = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  "@media (max-width: 576px)": {
    width: "80%",
  },
  "@media (max-width: 320px)": {
    width: "70%",
  },
});

export const StyledButton = styled(Button)({
  color: "white",
  width: "80%",
  marginBottom: "16px",
  "@media (max-width: 992px)": {
    width: "100%",
    marginBottom: "14px",
  },
  "@media (max-width: 576px)": {
    fontSize: "12px",
  },
  "@media (max-width: 320px)": {
    fontSize: "10px",
    marginBottom: "10px",
  },
});

export const StyledHeading = styled("h2")({
  fontSize: "30px",
  color: "white",
  textTransform: "capitalize",
  textAlign: "center",
  width: "80%",
  marginBottom: "50px",
  fontFamily: "Roboto Slab",
  "@media (max-width: 992px)": {
    width: "100%",
  },
  "@media (max-width: 576px)": {
    fontSize: "20px",
    marginBottom: "30px",
  },
  "@media (max-width: 320px)": {
    fontSize: "15px",
  },
});

export const GridContainer = styled("div")({
  width: "170px",
  "@media (max-width: 576px)": {
    width: "120px",
  },
  
});

export const StyledDiv = styled("div")(({ index }) => ({
  width: "100%",
  height: "45px",
  fontSize: "2.0rem",
  borderRight: index % 3 === 2 ? "0px" : "3px solid",
  borderBottom: Math.floor(index / 3) === 2 ? "0px" : "3px solid",
  borderColor: theme.palette.primary.main,
  color: theme.palette.warning.main,
  fontFamily: "Dancing Script",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "capitalize",
  "@media (max-width: 576px)": {
    height: "40px",
    fontSize: "1.8rem",
  },
  "@media (max-width: 320px)": {
    height: "30px",
    fontSize: "1.5rem",
  },
}));
