import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../../style/ListCSS";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";

const List = ({ postList }) => {
  const user = useSelector((state) => state.user);

  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format(`YYYY년 MMMM Do  a hh:mm`) + ` (수정)`;
    } else {
      return moment(a).format(`YYYY년 MMMM Do  a hh:mm`);
    }
  };

  return (
    <div className="listBox">
      {postList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <div className="userContent">
                <Avatar
                  size="40"
                  round={true}
                  src={post.author.photoURL}
                  style={{ border: `1px solid #eee` }}
                />
                <div className="userIfnfo">
                  <p className="displayName">
                    {post.author.displayName}
                    {user.uid === post.author.uid && (
                      <span className="writer">작성자</span>
                    )}
                  </p>
                  <p className="postTime">
                    {setTime(post.createdAt, post.updatedAt)}
                  </p>
                </div>
              </div>
              {post.image && (
                <div className="postImage">
                  <img src={post.image} />
                </div>
              )}
              <p className="postContent">{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </div>
  );
};

export default List;
