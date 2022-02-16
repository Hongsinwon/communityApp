import React, { useState, useEffect } from "react";
import { List } from "./Post/index";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

import { ListDiv } from "../style/ListCSS";
const MainPage = () => {
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState("최신순");
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  const getPostLoadMore = () => {
    let body = {
      sort,
      search,
      skip,
    };
    axios
      .post("/api/post/list", body)
      .then((response) => {
        setPostList([...postList, ...response.data.postList]);
        setSkip(skip + response.data.postList.length);
        if (response.data.postList.length < 5) {
          setLoadMore(false);
        }
      })
      .catch((err) => {
        alert("실패");
        console.log(err);
      });
  };

  const getPostList = () => {
    setSkip(0);
    let body = {
      sort,
      search,
      skip: 0,
    };
    axios
      .post("/api/post/list", body)
      .then((response) => {
        setPostList([...response.data.postList]);
        setSkip(response.data.postList.length);
        if (response.data.postList.length < 5) {
          setLoadMore(false);
        }
      })
      .catch((err) => {
        alert("실패");
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList();
  }, [sort]);

  const searchHandler = (e) => {
    e.preventDefault();
    getPostList();
  };

  return (
    <ListDiv>
      <div className="listOption">
        <form>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="제목, 내용 검색"
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                searchHandler();
              }
            }}
          />
          <button onClick={searchHandler}>검색</button>
        </form>

        <DropdownButton align="end" variant="outline-secondary" title={sort}>
          <Dropdown.Item onClick={() => setSort("최신순")}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("인기순")}>
            인기순
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <List postList={postList} />
      {loadMore && (
        <div className="moreBtn">
          <button onClick={() => getPostLoadMore()}>더 보기</button>
        </div>
      )}
    </ListDiv>
  );
};

export default MainPage;
