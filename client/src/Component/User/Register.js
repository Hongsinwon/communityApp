import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import axios from "axios";

import { LoginDiv } from "../../style/UserCSS";

const Register = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [pwConfig, setPwConfig] = useState("");
  const [flag, setFlag] = useState(false); // 중복버튼클릭 방지

  const [nameCheck, setNameCheck] = useState(false); // 중복체크
  const [nameInfo, setNameInfo] = useState("");
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const registerFunc = async (e) => {
    e.preventDefault();
    setFlag(true);
    //return setFlag(false);
    if (!(name && Email && PW && pwConfig)) {
      return alert("모든 값을 채워주세요.");
    }
    if (PW.length <= 6 && pwConfig.length <= 6) {
      return alert("비밀번호는 6자 이상 입력해야합니다.");
    }
    if (PW !== pwConfig) {
      return alert("비밀번호와 비밀번호 입력이 다릅니다.");
    }

    if (!nameCheck) {
      return alert("닉네임 중복검사를 진행해주세요.");
    }

    // firebase 로그인정보
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, PW);
    // firebase 추가 정보
    await createdUser.user.updateProfile({
      displayName: name,
      photoURL:
        "https://kr.object.ncloudstorage.com/react-community-sinwon/user/profile_1.png",
    });

    // DB에 보내줄 내용
    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
      photoURL:
        "https://kr.object.ncloudstorage.com/react-community-sinwon/user/profile_1.png",
    };

    axios.post("/api/user/register", body).then((response) => {
      if (response.data.success) {
        //회원가입 성공
        navigate("/login");
      } else {
        //회원가입 실패
        alert("회원가입이 실패하였습니다.");
        setFlag(false);
      }
    });
  };

  const nameCheckfunc = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("닉네임을 입력해주세요");
    }
    let body = {
      displayName: name,
    };
    axios.post("/api/user/namecheck", body).then((response) => {
      if (response.data.success) {
        if (response.data.check) {
          setNameCheck(true);
          setNameInfo("사용가능한 닉네임입니다.");
        } else {
          setNameInfo("사용 불가능한 닉네임입니다.");
        }
      }
    });
  };

  useEffect(() => {
    if (user.accessToken) {
      navigate("/");
    }
  }, []);

  return (
    <LoginDiv>
      <form>
        <label>닉네임</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="닉네임을 입력해주세요"
          disabled={nameCheck}
        />
        {nameInfo}
        <button onClick={nameCheckfunc}>닉네임 중복검사</button>
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
        />
        <label>비밀번호</label>
        <input
          type="password"
          minLength={8}
          value={PW}
          onChange={(e) => setPW(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
        />
        <label>비밀번호 확인</label>
        <input
          type="password"
          minLength={8}
          value={pwConfig}
          onChange={(e) => setPwConfig(e.target.value)}
          placeholder="다시 비밀번호를 입력해주세요."
        />
        <button disabled={flag} onClick={registerFunc}>
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
};

export default Register;
