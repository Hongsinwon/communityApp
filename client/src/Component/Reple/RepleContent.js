import React, { useState, useEffect, useRef } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";
import axios from "axios";

import { RepleContentDiv, RepleForm } from "../../style/ReplyCSS";

const RepleContent = ({ reple }) => {
  const [modalFlag, setModalFlag] = useState(false); //모달창
  const [editFlag, setEditFlag] = useState(false); //댓글수정 on/off
  const [repleEdit, setRepleEdit] = useState(reple.reple); // 댓글수정내용

  const ref = useRef();
  const user = useSelector((state) => state.user);

  useOnClickOutside(ref, () => setModalFlag(false));

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      uid: user.uid,
      reple: repleEdit,
      postId: reple.postId,
      repleId: reple._id,
    };

    axios.post("/api/reple/edit", body).then((response) => {
      if (response.data.success) {
        alert("덧글수정이 완료되었습니다.");
      } else {
        alert("덧글수정이 실패되었습니다.");
      }
      return window.location.reload();
    });
  };

  const DeleteHandler = (e) => {
    e.preventDefault();

    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        repleId: reple._id,
        postId: reple.postId,
      };
      axios
        .post("/api/reple/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("댓글이 삭제되었습니다.");
            window.location.reload();
          }
        })
        .catch((err) => {
          alert("댓글이 삭제에 실패되었습니다.");
        });
    }
  };

  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format(`YYYY년 MMMM Do a hh:mm`) + ` (수정)`;
    } else {
      return moment(a).format(`YYYY년 MMMM Do a hh:mm`);
    }
  };
  //<FontAwesomeIcon icon="fas fa-ellipsis-v" />
  return (
    <RepleContentDiv>
      <div className="author">
        <div className="userContent">
          <Avatar
            size="36"
            round={true}
            src={reple.author.photoURL}
            style={{ border: `1px solid #eee` }}
          />
          <div className="userIfnfo">
            <p className="displayName">
              {reple.author.displayName}
              {user.uid === reple.author.uid && (
                <span className="writer">작성자</span>
              )}
            </p>
            <p className="postTime">
              {setTime(reple.createdAt, reple.updatedAt)}
            </p>
          </div>
        </div>
        {reple.author.uid === user.uid && (
          <div className="modalControl">
            <div className="iconContent" onClick={() => setModalFlag(true)}>
              <span>더보기</span>
              <FontAwesomeIcon icon={faEllipsisV} className="icon" />
            </div>
            {modalFlag && (
              <ul className="modalList" ref={ref}>
                <li
                  onClick={() => {
                    setEditFlag(true);
                    setModalFlag(false);
                  }}
                >
                  수정
                </li>
                <li className="delete" onClick={DeleteHandler}>
                  삭제
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      {editFlag ? (
        <div>
          <RepleForm>
            <form>
              <input
                value={repleEdit}
                placeholder="덧글을 작성해 주세요"
                onChange={(e) => setRepleEdit(e.target.value)}
              />
              <button onClick={submitHandler}>등록</button>
            </form>
            <div className="cancel">
              <button onClick={() => setEditFlag(false)}>취소</button>
            </div>
          </RepleForm>
        </div>
      ) : (
        <p className="repleContent">{reple.reple}</p>
      )}
    </RepleContentDiv>
  );
};

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default RepleContent;
