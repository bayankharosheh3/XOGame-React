import { atom } from "recoil";

export const gameAtom = atom({
  key: "gameState",
  default: '',
});

export const settingsAtom = atom({
  key: "settingsState",
  default: {
    player1:"Player 1",
    player2:"Player 2",
    hard:false,
    start:"player1"
  },
});

