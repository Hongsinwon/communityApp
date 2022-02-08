import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { PostDiv, Post, PostBtnDiv } from "../../style/DetailCSS";
import { Spinner } from "react-bootstrap";

const Detail = () => {
  const [postInfo, setPostInfo] = useState({});
  const [flag, setFlag] = useState(false);
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  return (
    <PostDiv>
      {flag ? (
        <>
          <Post>
            <h1>{postInfo.title}</h1>
            {postInfo.image ? <img src={postInfo.image} alt="" /> : null}
            <p>{postInfo.content}</p>
          </Post>
          <PostBtnDiv>
            <Link to={`/edit/${postInfo.postNum}`}>
              <button className="edit">수정</button>
            </Link>
            <button className="delete" onClick={DeleteHandler}>
              삭제
            </button>
          </PostBtnDiv>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </PostDiv>
  );
};

export default Detail;
