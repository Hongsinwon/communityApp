import styled from "styled-components";

export const PostDiv = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 90px;
  @media (max-width: 1200px) {
    width: 80%;
  }
`;

export const SpinnerDiv = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Post = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  border-radius: 5px;
  border: 1px solid #eee;

  .title {
    padding: 12px 20px 0px;
    margin-bottom: 12px;
    font-size: 22px;
    font-weight: bold;
    color: #555;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .userContent {
    padding: 0 20px 20px;
    display: flex;
    margin-bottom: 32px;
    border-bottom: 1px solid #eee;

    .userIfnfo {
      margin-left: 16px;

      .displayName {
        font-size: 16px;

        .writer {
          position: relative;
          top: -3px;
          margin-left: 8px;
          padding: 2px 8px;
          font-size: 12px;
          font-weight: bold;
          background: #f5bd1a;
          border-radius: 5px;
          color: #fff;
        }
      }
      .postTime {
        margin-top: 2px;
        font-size: 12px;
        color: #999;
      }
    }
  }
  .postImage {
    display: flex;
    justify-content: center;
    padding: 0 20px 24px;

    img {
      width: 50%;
      @media (max-width: 1000px) {
        width: 80%;
      }
    }
  }
  .postContent {
    width: 100%;
    padding: 0 20px 32px;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;

export const PostBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 5px 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.5s;

    &:hover {
      background: #ddd;
    }
  }

  .edit {
    margin-right: 10px;
    &:focus {
      background: #10ad62;
      border: 1px solid #10ad62;
      color: #fff;
    }
  }

  .delete {
    &:focus {
      background: #ff0000;
      border: 1px solid #ff0000;
      color: #fff;
    }
  }
`;
