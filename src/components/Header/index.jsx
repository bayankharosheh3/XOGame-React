import React from "react";
import {
  Container,
  PlayerInfo,
  PlayerName,
  Xo,
  RoundNumCol,
  TimesWon,
} from "./styles";
import {
  currentPlayerAtom,
  settingsAtom,
  timeAtom,
  timesWinAtom,
} from "../../recoil/atom/gameAtom";
import { useRecoilState } from "recoil";
import { formatTime } from "../formatTime";

const Header = () => {
  const [settings, setSettings] = useRecoilState(settingsAtom);
  const [times, setTimes] = useRecoilState(timesWinAtom);
  const [time, setTime] = useRecoilState(timeAtom);
  const [currentPlayer, setCurrentPlayer] = useRecoilState(currentPlayerAtom);

  console.log(currentPlayer);
  return (
    <Container container>
      <PlayerInfo item alignItems="center" justifyContent="center">
        <PlayerName variant="h2">{settings.player1}</PlayerName>
        <Xo variant="body1" current={currentPlayer === "X" ? "true" : "false"}>
          X
        </Xo>
        <TimesWon variant="body2">
          Won: <span>{times.player1}</span>
        </TimesWon>
      </PlayerInfo>
      <RoundNumCol item xs={4}>
        Round#: <span>{times.round}</span>
        {settings.player2 === "computer" && (
          <div style={{fontSize:'13px',marginTop:'10px'}}>
            {formatTime(time.min)}---{formatTime(time.max)}
          </div>
        )}
      </RoundNumCol>
      <PlayerInfo item>
        <PlayerName variant="h2">{settings.player2}</PlayerName>
        <Xo variant="body1" current={currentPlayer === "O" ? "true" : "false"}>
          O
        </Xo>
        <TimesWon variant="body2">
          Won: <span>{times.player2}</span>
        </TimesWon>
      </PlayerInfo>
    </Container>
  );
};

export default Header;
