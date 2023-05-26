import React, { useEffect } from "react";
import Menu from "../components/Menu";
import { useResetRecoilState } from "recoil";
import { currentPlayerAtom, gameAtom, settingsAtom, timeAtom, timesWinAtom } from "../recoil/atom/gameAtom";

const StartMenu = () => {
  const resetGameState = useResetRecoilState(gameAtom);
  const resetSettingsState = useResetRecoilState(settingsAtom);
  const resetTimesWinState = useResetRecoilState(timesWinAtom);
  const resetTimeState = useResetRecoilState(timeAtom);
  const currentPlayerState = useResetRecoilState(currentPlayerAtom);


  useEffect(() => {
    resetGameState();
    resetSettingsState();
    resetTimesWinState();
    resetTimeState();
    currentPlayerState();
  }, []);

  return (
    <>
      <Menu/>
    </>
  );
};

export default StartMenu;
