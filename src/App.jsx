import React from "react";

import {
  Route,
  Routes,

} from "react-router-dom";
import { Author, Home } from "./Page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:author" element={<Author />} />
      </Routes>
    </>
  )
};

export default App;
