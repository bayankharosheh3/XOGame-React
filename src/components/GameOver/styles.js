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
});

export const StyledDialogContent = styled(DialogContent)({
  backgroundColor: "black",
});

export const StyledDialogContentText = styled(DialogContentText)({
  fontSize: "30px",
  fontWeight: "800",
  color: theme.palette.primary.main,
  fontFamily: "Dancing Script",
});

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  backgroundColor: "black",
}));

export const StyledButton = styled(Button)({
  margin: "10px",
  color: "white",
  borderColor: "white",
});
