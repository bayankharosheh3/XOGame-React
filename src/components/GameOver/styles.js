import styled from "@emotion/styled";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import theme from "../../themes/theme";

export const StyledDialogTitle = styled(DialogTitle)({
  color: theme.palette.info.main,
  fontFamily: "Dancing Script",
  fontSize: "40px",
  backgroundColor: "black",
  "@media (max-width: 576px)": {
    fontSize: "25px",
  },
  "@media (max-width: 320px)": {
    fontSize: "20px",
  },
});

export const StyledDialogContent = styled(DialogContent)({
  backgroundColor: "black",
});

export const StyledDialogContentText = styled(DialogContentText)({
  fontSize: "30px",
  fontWeight: "800",
  color: theme.palette.primary.main,
  fontFamily: "Dancing Script",
  "@media (max-width: 576px)": {
    fontSize: "22px",
  },
  "@media (max-width: 320px)": {
    fontSize: "18px",
  },
});

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  backgroundColor: "black",
}));

export const StyledButton = styled(Button)({
  margin: "10px",
  color: "white",
  borderColor: "white",
  "@media (max-width: 576px)": {
    fontSize: "10px",
  },
});
