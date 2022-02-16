import styled from "styled-components";

export const UploadDiv = styled.div`
  width: 100%;
  margin: 10px 0;
  margin-top: 70px;
`;

export const UploadForm = styled.form`
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 80%;
  }

  label {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  #title {
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #c6c6c6;

    &:active,
    &:focus {
      outline: none;
      border: 1px solid #10ce72;
    }
  }

  .imgUploadCut {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  textarea {
    margin: 10px 0;
    min-height: 360px;
    resize: none;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #c6c6c6;

    &:active,
    &:focus {
      outline: none;
      border: 1px solid #10ce72;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #aaa;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background: #eee;
      border-radius: 10px;
      box-shadow: inset 0 0 5px whitesmoke;
    }
  }
`;

export const UploadButtonDiv = styled.div`
  margin-top: 10px;
  display: flex;

  button {
    width: 100%;
    border-radius: 5px;
    height: 50px;
    line-height: 50px;
    background-color: #10ad62;
    border: 1px solid #10ad62;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.5s;
    &:hover {
      background-color: #10ce72;
      border: 1px solid #10ce72;
    }

    &.cancel {
      margin-right: 10px;
      background: #eee;
      border: 1px solid #eee;
      color: #555;
      font-size: 16px;
      font-weight: normal;
      &:hover {
        background: #ccc;
        border: 1px solid #ccc;
      }
    }
  }
`;
