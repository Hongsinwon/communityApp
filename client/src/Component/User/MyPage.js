import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase";
import Avatar from "react-avatar";
import axios from "axios";

const MyPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [currentImg, setCrrentImg] = useState("");

  useEffect(() => {
    if (user.isLoding && !user.accessToken) {
      navigate("/login");
    } else {
      setCrrentImg(user.photoURL);
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
      });
    } catch (err) {
      return alert("프로필 저장에 실패하였습니다.");
    }
    let body = {
      photoURL: currentImg,
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
    <div>
      <form>
        <label>
          <input
            type={`file`}
            accept="image/*"
            style={{ display: "none" }}
            onChange={ImageUpload}
          />
          <Avatar
            size="100"
            round={true}
            src={currentImg}
            style={{ border: `1px solid #eee`, cursor: "pointer" }}
          />
        </label>
        <button onClick={saveProFile}>저장</button>
      </form>
    </div>
  );
};

export default MyPage;
