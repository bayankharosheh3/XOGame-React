import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartMenu from "./views/StartMenu";
import GameBoard from "./views/GameBoard";
import NotFound from "./views/NotFound";
import Layout from "./components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><StartMenu /></Layout>} />
        <Route path="/game" element={<Layout><GameBoard /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
