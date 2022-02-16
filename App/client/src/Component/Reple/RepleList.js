import React, { useState, useEffect } from "react";
import { RepleContent } from "./index.js";
import axios from "axios";

import { RepleDiv } from "../../style/ReplyCSS";

const RepleList = (props) => {
  const [repleList, setRepleList] = useState([]);

  useEffect(() => {
    let body = {
      postId: props.postId,
    };
    axios.post("/api/reple/getreple", body).then((response) => {
      if (response.data.success) {
        setRepleList([...response.data.repleList]);
      }
    });
  }, []);

  return (
    <RepleDiv>
      {repleList.map((reple, idx) => {
        return <RepleContent reple={reple} key={idx} />;
      })}
    </RepleDiv>
  );
};

export default RepleList;
