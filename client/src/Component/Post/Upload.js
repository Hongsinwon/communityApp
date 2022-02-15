import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { ImageUpload } from ".";
import axios from "axios";

import { UploadDiv, UploadButtonDiv, UploadForm } from "../../style/UploadCSS";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.accessToken) {
      alert("로그인한 회원만 글을 작성할 수 있습니다.");
      navigate("/login");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      return alert("모든 항목을 채워주세요.");
    }

    let body = {
      title,
      content,
      image,
      uid: user.uid,
    };

    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 작성이 완료되었습니다.");
          navigate("/");
        } else {
          alert("글 작성이 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <UploadDiv>
        <UploadForm>
          <label htmlFor="title">새 글 작성</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />

          <ImageUpload setImage={setImage} />
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
          />

          {image && (
            <div className="imgUploadCut">
              <Avatar
                size="300"
                src={image}
                style={{ border: `1px solid #eee`, cursor: "pointer" }}
              />
            </div>
          )}
          <UploadButtonDiv>
            <button onClick={onSubmit}>업로드</button>
          </UploadButtonDiv>
        </UploadForm>
      </UploadDiv>
    </>
  );
};

export default Upload;
