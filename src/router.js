import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartMenu from "./views/StartMenu";
import GameBoard from "./views/GameBoard";
import NotFound from "./views/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartMenu />}></Route>
        <Route path="/game" element={<GameBoard />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
