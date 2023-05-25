import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import theme from "../../themes/theme";

export const Container = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.info.main,
  borderRadius: "4px",
});

export const PlayerInfo = styled(Grid)({
  display: "flex",
  flexDirection:'column',
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "4px",
  margin:'13px 15px',
  padding:'10px 10px',
  Width:'100%',
});

export const PlayerName = styled(Typography)({
  fontWeight:'700',
  fontSize: "17px",
  color: "#fff",
  marginBottom:'10px',
  textAlign:'center'
});

export const Xo = styled(Typography)({
  fontSize: "16px",
  padding: "3px 5px",
  backgroundColor: "#b23a48",
  borderRadius: "10%",
  color: "#fff",
  fontFamily: "Satisfy, cursive",
  fontWeight:'700',
  width:'30px',  
  textAlign:'center'
});

export const RoundNumCol = styled(Grid)({
  fontSize: "30px",
  fontWeight:'800',
  fontFamily: 'Dancing Script',
  textAlign:'center'
});

export const TimesWon = styled(Typography)({
  textAlign: "center",
  color: "#fff",
  margin:'5px',  
  fontWeight:'700',
  fontSize: "16px",
});

export const Draw = styled(Typography)({
  textAlign: "center",
  color: "#edf2f4",
});
