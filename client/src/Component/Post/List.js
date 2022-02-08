import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../style/ListCSS";

const List = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((response) => {
        setPostList([...response.data.postList]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ListDiv>
      {postList.map(({ title, content, postNum }, idx) => (
        <ListItem key={idx}>
          <Link to={`/post/${postNum}`}>
            <h2 className="title">{title}</h2>
            <p>{content}</p>
          </Link>
        </ListItem>
      ))}
    </ListDiv>
  );
};

export default List;
