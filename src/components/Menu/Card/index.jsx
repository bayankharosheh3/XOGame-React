import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { Content } from "./styles";
import { settingsAtom } from "../../../recoil/atom/gameAtom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Card = ({ selectedButton }) => {
  const [settings, setSettings] = useRecoilState(settingsAtom);

  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  const [player, setPlayer] = useState("Player 1");
  const [hard, setHard] = useState(true);

  const navigate = useNavigate();

  const handleButton1Click = () => {
    setSettings({
      ...settings,
      player1: player1,
      player2: player2,
    });
    navigate("/game");
  };

  const handleButton2Click = () => {
    setSettings({
      ...settings,
      player1: player1,
      player2: "computer",
      hard: hard,
    });
    navigate("/game");
  };

  return (
    <Content>
      {selectedButton === 1 ? (
        <div>
          <div>
            <TextField
              id="player1"
              label="X"
              variant="filled"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="player2"
              label="O"
              variant="filled"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={handleButton1Click}
          >
            Start
          </Button>
        </div>
      ) : (
        <div>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                onChange={(e) => setHard(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="Hard"
          />
          <div>
            <TextField
              id="player1"
              label="X"
              variant="filled"
              value={player}
              onClick={(e) => setPlayer(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={handleButton2Click}
          >
            Start
          </Button>
        </div>
      )}
    </Content>
  );
};

export default Card;
