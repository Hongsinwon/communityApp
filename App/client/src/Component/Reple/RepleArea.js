import React from "react";
import { RepleList, RepleUpload } from "./index.js";
import { useSelector } from "react-redux";

const RepleArea = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {user.accessToken && <RepleUpload postId={props.postId} />}

      <RepleList postId={props.postId} />
    </div>
  );
};

export default RepleArea;
