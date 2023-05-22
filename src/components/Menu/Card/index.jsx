import React from "react";
import {
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Content } from "./styles";

const Card = ({ selectedButton }) => {
  return (
    <Content>
      {selectedButton === 1 ? (
        <Typography>
          <div>
            <TextField id="filled-basic" label="Player1" variant="filled" />
          </div>
          <div>
            <TextField id="filled-basic" label="Player2" variant="filled" />
          </div>
          <Button variant="contained" color="success">
            Start
          </Button>
        </Typography>
      ):(
        <Typography>
          <FormControlLabel control={<Switch defaultChecked />} label="Hard" />
          <div>
            <TextField id="filled-basic" label="Player1" variant="filled" />
          </div>
          <Button variant="contained" color="success">
            Start
          </Button>
        </Typography>
      ) }
    </Content>
  );
};

export default Card;
