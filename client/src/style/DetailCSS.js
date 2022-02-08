import styled from "styled-components";

export const PostDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Post = styled.div`
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0 0 5px #aaa;
`;

export const PostBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 5px 15px;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
  }

  .edit {
    background: #000;
    border: 1px solid #000;
    color: #fff;
    &:focus {
      background: #fff;
      border: 1px solid #000;
      color: #000;
    }
  }

  .delete {
    background: #ff0000;
    border: 1px solid #ff0000;
    color: #fff;
    &:focus {
      background: #fff;
      border: 1px solid #ff0000;
      color: #ff0000;
    }
  }
`;
