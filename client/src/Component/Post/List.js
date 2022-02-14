import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../../style/ListCSS";
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
    <div className="listBox">
      {postList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <div>
                <Avatar
                  size="40"
                  round={true}
                  src={post.author.photoURL}
                  style={{ border: `1px solid #eee` }}
                />
                <div>
                  <p>{post.author.displayName}</p>
                  <p>{setTime(post.createdAt, post.updatedAt)}</p>
                </div>
              </div>
              {post.image && <img src={post.image} />}
              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </div>
  );
};

export default List;
