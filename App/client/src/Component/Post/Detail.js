import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";
import axios from "axios";

import { PostDiv, Post, PostBtnDiv } from "../../style/DetailCSS";

const Detail = ({ postInfo, flag }) => {
  let params = useParams();
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        postNum: params.postNum,
      };
      axios
        .post("/api/post/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/");
          }
        })
        .catch((err) => {
          alert("게시글 삭제에 실패되었습니다.");
        });
    }
  };

  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format(`YYYY년 MMMM Do  a hh:mm`) + ` (수정)`;
    } else {
      return moment(a).format(`YYYY년 MMMM Do , a hh:mm`);
    }
  };

  return (
    <PostDiv>
      <>
        <Post>
          <h1 className="title">{postInfo.title}</h1>
          <div className="userContent">
            <Avatar
              size="36"
              round={true}
              src={postInfo.author.photoURL}
              style={{ border: `1px solid #eee` }}
            />
            <div className="userIfnfo">
              <p className="displayName">
                {postInfo.author.displayName}
                {user.uid === postInfo.author.uid && (
                  <span className="writer">작성자</span>
                )}
              </p>
              <p className="postTime">
                {setTime(postInfo.createdAt, postInfo.updatedAt)}
              </p>
            </div>
          </div>
          {postInfo.image ? (
            <div className="postImage">
              <img src={postInfo.image} alt="" />
            </div>
          ) : null}
          <p className="postContent">{postInfo.content}</p>
        </Post>
        {user.uid === postInfo.author.uid && (
          <PostBtnDiv>
            <div>
              <Link to={`/edit/${postInfo.postNum}`}>
                <button className="edit">수정</button>
              </Link>
              <button className="delete" onClick={DeleteHandler}>
                삭제
              </button>
            </div>
            <button className="list" onClick={() => navigate("/")}>
              목록
            </button>
          </PostBtnDiv>
        )}
      </>
    </PostDiv>
  );
};

export default Detail;
