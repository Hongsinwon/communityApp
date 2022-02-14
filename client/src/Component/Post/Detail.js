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
      return moment(b).format(`YYYY년 MMMM Do , a hh:mm`) + `(수정됨)`;
    } else {
      return moment(a).format(`YYYY년 MMMM Do , a hh:mm`);
    }
  };

  console.log(postInfo.author.photoURL);
  return (
    <PostDiv>
      <>
        <Post>
          <h1>{postInfo.title}</h1>
          <p>
            <Avatar
              size="40"
              round={true}
              src={postInfo.author.photoURL}
              style={{ border: `1px solid #eee` }}
            />
            {postInfo.author.displayName}
          </p>
          <p>{setTime(postInfo.createdAt, postInfo.updatedAt)}</p>
          {postInfo.image ? <img src={postInfo.image} alt="" /> : null}
          <p>{postInfo.content}</p>
        </Post>
        {user.uid === postInfo.author.uid && (
          <PostBtnDiv>
            <Link to={`/edit/${postInfo.postNum}`}>
              <button className="edit">수정</button>
            </Link>
            <button className="delete" onClick={DeleteHandler}>
              삭제
            </button>
          </PostBtnDiv>
        )}
      </>
    </PostDiv>
  );
};

export default Detail;
