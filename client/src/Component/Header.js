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

  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setModal(false);
      }
    };

    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <HeaderWrap>
      <div className="topNav">
        <Link to="/">
          <img src={require("../image/logo.png")} />
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
              <p onClick={() => setModal(!modal)} ref={ref}>
                <span className="delete mypage">마이페이지</span>
                <FontAwesomeIcon icon={faUser} className="icon" />
              </p>
              {modal && (
                <ul className="subMenu">
                  <Link to="/mypage">
                    <li>마이페이지</li>
                  </Link>
                  <Link to="">
                    <li onClick={LogoutHandler} className="logout">
                      로그아웃
                    </li>
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

export default Header;
