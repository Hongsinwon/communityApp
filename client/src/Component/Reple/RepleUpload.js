import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { RepleDiv, RepleForm } from "../../style/ReplyCSS";

const RepleUpload = (props) => {
  const user = useSelector((state) => state.user);
  const [reple, setReple] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!reple) {
      return alert("댓글을 작성해주세요.");
    }

    let body = {
      reple,
      uid: user.uid,
      postId: props.postId,
    };
    axios.post("/api/reple/submit", body).then((response) => {
      if (response.data.success) {
        alert("댓글 작성이 성공하였습니다.");
        window.location.reload();
      } else {
        alert("댓글 작성이 실패하였습니다.");
      }
    });
  };

  return (
    <RepleDiv>
      <RepleForm>
        <form>
          <input
            value={reple}
            placeholder="덧글을 작성해 주세요"
            onChange={(e) => setReple(e.target.value)}
          />
          <button onClick={submitHandler}>등록</button>
        </form>
      </RepleForm>
    </RepleDiv>
  );
};

export default RepleUpload;
