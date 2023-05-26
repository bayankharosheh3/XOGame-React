import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import theme from "../../themes/theme";

export const Container = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.info.main,
  borderRadius: "4px",
  width:'60%',
  "@media (max-width: 992px)": {
    width:'80%',
    marginBottom:'20px'
  },
  "@media (max-width: 576px)": {
    width:'100%',
    marginBottom:'0px'
  },
});

export const PlayerInfo = styled(Grid)({
  display: "flex",
  flexDirection:'column',
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "4px",
  margin:'10px 12px',
  padding:'7px 10px',
  Width:'100%',
  "@media (max-width: 576px)": {
    margin:'8px 10px',
    padding:'5px 8px',
  },
  "@media (max-width: 320px)": {
    margin:'3px 5px',
  },
});

export const PlayerName = styled(Typography)({
  fontWeight:'700',
  fontSize: "16px",
  color: "#fff",
  marginBottom:'5px',
  textAlign:'center',
  "@media (max-width: 576px)": {
    fontSize: "12px",
    height:'23px',
  },
  "@media (max-width: 320px)": {
    fontSize: "10px",
    height:'10px',
  },
});

export const Xo = styled(Typography)(({ theme, current }) => ({
  fontSize: "16px",
  padding: "3px 3px",
  backgroundColor: current ==='true' ? theme.palette.info.main : "#b23a48",
  borderRadius: "10%",
  color: "#fff",
  fontFamily: "Satisfy, cursive",
  fontWeight: "700",
  width: "30px",
  textAlign: "center",
  "@media (max-width: 576px)": {
    fontSize: "13px",
  },
  "@media (max-width: 375px)": {
    fontSize: "10px",
  },
  "@media (max-width: 320px)": {
    fontSize: "9px",
  },
}));


export const RoundNumCol = styled(Grid)({
  fontSize: "26px",
  fontWeight:'800',
  fontFamily: 'Dancing Script',
  textAlign:'center',
  "@media (max-width: 576px)": {
    fontSize: "20px",
  },
  "@media (max-width: 320px)": {
    fontSize: "15px",
  },
});

export const TimesWon = styled(Typography)({
  textAlign: "center",
  color: "#fff",
  margin:'4px',  
  fontWeight:'700',
  fontSize: "16px",
  "@media (max-width: 576px)": {
    fontSize: "12px",
  },
  "@media (max-width: 375px)": {
    fontSize: "10px",
  },
  "@media (max-width: 375px)": {
    fontSize: "9px",
    margin:'2px',  
  },
});

export const Draw = styled(Typography)({
  textAlign: "center",
  color: "#edf2f4",
});
