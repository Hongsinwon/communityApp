import React from "react";
import { Routes, Route } from "react-router-dom";
import { Heading } from "./Component/index.js";
import { List, Upload, Detail, Edit } from "./Component/Post/index.js";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/edit/:postNum" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
