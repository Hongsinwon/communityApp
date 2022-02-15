import styled from "styled-components";

export const ListDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 82px;

  .listOption {
    margin-top: 32px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;

    form {
      width: 30%;
      display: grid;
      grid-template-columns: 4fr 1fr;
      grid-template-rows: 40px;
      @media (max-width: 1280px) {
        width: 40%;
      }
      @media (max-width: 800px) {
        width: 55%;
        grid-template-columns: 3fr 1fr;
      }
      @media (max-width: 600px) {
        width: 60%;
      }
      @media (max-width: 500px) {
        grid-template-columns: 140px 60px;
      }
      input {
        padding-left: 10px;
        border-radius: 5px 0px 0px 5px;
        border: 1px solid #eee;

        &:active,
        &:focus {
          outline: none;
          border: 1px solid #10ce72;
        }
      }
      button {
        height: 100%;
        border-radius: 0px 5px 5px 0px;
        border: 1px solid #10ce72;
        font-weight: bold;
        color: #fff;
        background: #10ce72;
        transition: all 0.5s;

        &:hover,
        &:active {
          border: 1px solid #10ad62;
          background: #10ad62;
        }
      }
    }
  }

  .moreBtn {
    display: flex;
    justify-content: center;
    margin-bottom: 36px;

    button {
      padding: 10px 40px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background: #eee;
      color: #555;
    }
  }

  .listBox {
    background: #fff;
    margin-bottom: 36px;
  }
`;

export const ListItem = styled.div`
  margin-bottom: 16px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-sizing: border-box;

  //제목
  .title {
    padding: 12px 20px 0px;
    margin-bottom: 12px;
    font-size: 22px;
    font-weight: bold;
    color: #555;
    word-break: keep-all;
    word-wrap: break-word;
  }
  // 유저정보
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
          background: #10ce72;
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

  //이미지
  .postImage {
    display: flex;
    justify-content: center;
    padding: 0 20px 24px;

    img {
      width: 80%;
    }
  }
  // 글 설정
  .postContent {
    width: 100%;
    padding: 0 20px 32px;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;
