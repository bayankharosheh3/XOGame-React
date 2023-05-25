import React from "react";
import {
  Container,
  PlayerInfo,
  PlayerName,
  Xo,
  RoundNumCol,
  TimesWon,
} from "./styles";
import { settingsAtom, timesWinAtom } from "../../recoil/atom/gameAtom";
import { useRecoilState } from "recoil";

const Header = () => {

  const [settings, setSettings] = useRecoilState(settingsAtom);
  const [times, setTimes] = useRecoilState(timesWinAtom);

  return (
    <Container container>
      <PlayerInfo item xs={2} alignItems="center" justifyContent="center">
        <PlayerName variant="h2">{settings.player1}</PlayerName>
        <Xo variant="body1">X</Xo>
        <TimesWon variant="body2">
          Won: <span>{times.player1}</span>
        </TimesWon>
      </PlayerInfo>
      <RoundNumCol item xs={4}>
        Round#: <span>{times.draw}</span>
      </RoundNumCol>
      <PlayerInfo item xs={2}>
        <PlayerName variant="h2">{settings.player2}</PlayerName>
        <Xo variant="body1">O</Xo>
        <TimesWon variant="body2">
          Won: <span>{times.player2}</span>
        </TimesWon>
      </PlayerInfo>
    </Container>
  );
};

export default Header;
