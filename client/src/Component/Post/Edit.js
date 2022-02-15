import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ImageUpload } from ".";
import Avatar from "react-avatar";
import axios from "axios";

import { UploadDiv, UploadButtonDiv, UploadForm } from "../../style/UploadCSS";

const Edit = () => {
  const [postInfo, setPostInfo] = useState({}); //title, content, postNum 정보

  const [title, setTitle] = useState(""); // title input
  const [content, setContent] = useState(""); // content input
  const [image, setImage] = useState("");

  let navigate = useNavigate(); // 이동
  let params = useParams(); // 현재 정보가져오기

  // postNum에 맞는 정보 불러오기
  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 수정정보 title, content에 삽입
  useEffect(() => {
    setTitle(postInfo.title);
    setContent(postInfo.content);
    setImage(postInfo.image);
  }, [postInfo]);

  // button onClick시 server로 내용전송
  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      return alert("모든 항목을 채워주세요.");
    }

    let body = {
      title,
      content,
      image,
      postNum: params.postNum,
    };

    axios
      .post("/api/post/edit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 수정이 완료되었습니다.");
          navigate(`/post/${params.postNum}`);
        } else {
          alert("글 수정에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigateBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  console.log(image);

  return (
    <>
      <UploadDiv>
        <UploadForm>
          <label htmlFor="title">글 수정</label>
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
            <button onClick={navigateBack} className="cancel">
              취소
            </button>
            <button onClick={onSubmit}>업로드</button>
          </UploadButtonDiv>
        </UploadForm>
      </UploadDiv>
    </>
  );
};

export default Edit;
