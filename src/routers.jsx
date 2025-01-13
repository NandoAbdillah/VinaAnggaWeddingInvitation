import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./pages/Body";
import Main from "./pages/Main";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
