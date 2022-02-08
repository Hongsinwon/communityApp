import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadDiv, UploadButtonDiv, UploadForm } from "../../style/UploadCSS";
import { ImageUpload } from ".";
import axios from "axios";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      return alert("모든 항목을 채워주세요.");
    }

    let body = {
      title,
      content,
      image,
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
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
          <ImageUpload setImage={setImage} />
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
          <UploadButtonDiv>
            <button onClick={onSubmit}>업로드</button>
          </UploadButtonDiv>
        </UploadForm>
      </UploadDiv>
    </>
  );
};

export default Upload;
