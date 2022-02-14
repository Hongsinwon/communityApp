import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoginUser, ClearUser } from "./Reducer/userSlice.js";
import firebase from "./Component/firebase";

import { Heading, MainPage } from "./Component/index.js";
import { Login, Register, MyPage } from "./Component/User/index.js";
import { List, Upload, Edit, PostArea } from "./Component/Post/index.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      console.log("userInfo :", userInfo);
      if (userInfo !== null) {
        dispatch(IoginUser(userInfo.multiFactor.user));
      } else {
        dispatch(ClearUser());
      }
    });
  }, []);

  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Post, Reple */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<PostArea />} />
        <Route path="/edit/:postNum" element={<Edit />} />

        {/* User*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
