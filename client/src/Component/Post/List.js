import React from "react";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../style/ListCSS";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";

const List = ({ postList }) => {
  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format(`YYYY년 MMMM Do , a hh:mm`) + `(수정됨)`;
    } else {
      return moment(a).format(`YYYY년 MMMM Do , a hh:mm`);
    }
  };

  return (
    <ListDiv>
      {postList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <p>
                <Avatar
                  size="40"
                  round={true}
                  src={post.author.photoURL}
                  style={{ border: `1px solid #eee` }}
                />
                {post.author.displayName}
              </p>
              <p>{post.content}</p>
              <p>{setTime(post.createdAt, post.updatedAt)}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
};

export default List;