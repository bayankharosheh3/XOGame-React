import React, { useEffect } from "react";
import Menu from "../components/Menu";
import { useResetRecoilState } from "recoil";
import { gameAtom, settingsAtom, timeAtom, timesWinAtom } from "../recoil/atom/gameAtom";

const StartMenu = () => {
  const resetGameState = useResetRecoilState(gameAtom);
  const resetSettingsState = useResetRecoilState(settingsAtom);
  const resetTimesWinState = useResetRecoilState(timesWinAtom);
  const resetTimeState = useResetRecoilState(timeAtom);

  useEffect(() => {
    resetGameState();
    resetSettingsState();
    resetTimesWinState();
    resetTimeState();
  }, []);

  return (
    <>
      <Menu/>
    </>
  );
};

export default StartMenu;
