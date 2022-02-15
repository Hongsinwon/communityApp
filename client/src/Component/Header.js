import React, { useState, useRef, useEffect } from "react";
import { faEllipsisV, faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "./firebase";

import { HeaderWrap } from "../style/HaederCSS";

const Header = () => {
  const [modal, setModal] = useState(false);
  const ref = useRef();

  console.log(modal);
  useOnClickOutside(ref, () => setModal(false));

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  const onClickModal = () => {
    if (!modal) {
      return setModal(true);
    }
    return setModal(false);
  };

  return (
    <HeaderWrap>
      <div className="topNav">
        <Link to="/">
          <h1>로고</h1>
        </Link>
        <div className="topNavMenu">
          <Link to="/upload">
            <p>
              <span className="delete">글 작성</span>
              <FontAwesomeIcon icon={faEdit} className="icon" />
            </p>
          </Link>
          {user.accessToken === "" ? (
            <Link to="/login">
              <p>로그인</p>
            </Link>
          ) : (
            <>
              <p onClick={onClickModal}>
                <span className="delete mypage">마이페이지</span>
                <FontAwesomeIcon icon={faUser} className="icon" />
              </p>
              {modal && (
                <ul className="subMenu" ref={ref}>
                  <Link to="/mypage">
                    <li>마이페이지</li>
                  </Link>
                  <Link to="">
                    <li onClick={LogoutHandler}>로그아웃</li>
                  </Link>
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </HeaderWrap>
  );
};

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default Header;
