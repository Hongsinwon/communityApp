import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "../firebase.js";

import { LoginDiv } from "../../style/UserCSS";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const SingInFunc = async (e) => {
    e.preventDefault();
    if (!(Email && PW)) {
      return alert("모든 값을 채워주세요.");
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(Email, PW);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setErrorMsg("존재하지 않는 이메일입니다.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setErrorMsg("로그인이 실패하였습니다.");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  }, [ErrorMsg]);

  const onNavigate = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  useEffect(() => {
    if (user.accessToken) {
      navigate("/");
    }
  }, []);

  return (
    <LoginDiv>
      <form>
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요."
          required
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={PW}
          onChange={(e) => setPW(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          required
        />
        {ErrorMsg !== " " && <p>{ErrorMsg}</p>}
        <button onClick={SingInFunc}>로그인</button>
        <button onClick={onNavigate}>회원가입</button>
      </form>
    </LoginDiv>
  );
};

export default Login;
