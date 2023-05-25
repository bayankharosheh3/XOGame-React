import styled from "@emotion/styled";
import { Button } from "@mui/material";
import theme from "../../themes/theme";

export const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width:'90%',
  height: "100%",
  gap:'5%',
});

export const ButtonList = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
});

export const StyledButton = styled(Button)({
  color: "white",
  width: "80%",
  marginBottom:"16px",
});

export const StyledHeading = styled("h2")({
  fontSize: "30px",
  color: "white",
  textTransform: "capitalize",
  textAlign: "center",
  width: "80%",
  marginBottom: "50px",
  fontFamily: "Roboto Slab",
});

export const GridContainer = styled("div")({
  width: "200px",

});

export const StyledDiv = styled("div")(({ index }) => ({
  width: "60px",
  height: "60px",
  fontSize: "2.2rem",
  borderRight: index % 3 === 2 ? "0px" : "3px solid",
  borderBottom: Math.floor(index / 3) === 2 ? "0px" : "3px solid",
  borderColor: theme.palette.primary.main,
  color:theme.palette.warning.main,
  fontFamily: "Dancing Script",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "capitalize",
}));
