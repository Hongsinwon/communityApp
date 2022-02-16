import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase";
import Avatar from "react-avatar";
import axios from "axios";

import { MypageDiv } from "../../style/UserCSS";

const MyPage = () => {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [currentImg, setCrrentImg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLoding && !user.accessToken) {
      navigate("/login");
    } else {
      setCrrentImg(user.photoURL);
      setName(user.displayName);
    }
  }, [user]);

  const ImageUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    axios.post("/api/user/profile/img", formData).then((response) => {
      setCrrentImg(response.data.filePath);
    });
  };

  const saveProFile = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().currentUser.updateProfile({
        photoURL: currentImg,
        displayName: name,
      });
    } catch (err) {
      return alert("프로필 저장에 실패하였습니다.");
    }
    let body = {
      photoURL: currentImg,
      displayName: name,
      uid: user.uid,
    };
    axios.post("/api/user/profile/update", body).then((response) => {
      if (response.data.success) {
        alert("프로필 저장에 성공하였습니다.");
        window.location.reload();
      } else {
        alert("프로필 저장에 실패하였습니다.");
      }
    });
  };

  return (
    <MypageDiv>
      <form>
        <label className="userImage">
          <input
            type={`file`}
            accept="image/*"
            style={{ display: "none" }}
            onChange={ImageUpload}
          />

          <Avatar
            size="200"
            round={true}
            src={currentImg}
            style={{ border: `1px solid #eee`, cursor: "pointer" }}
          />
        </label>

        <label>닉네임 </label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="닉네임을 입력해주세요"
        />

        <button className="saveBtn" onClick={saveProFile}>
          저장
        </button>
      </form>
    </MypageDiv>
  );
};

export default MyPage;
