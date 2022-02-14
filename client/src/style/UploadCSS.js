import styled from "styled-components";

export const UploadDiv = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const UploadForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  #title {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #c6c6c6;
    &:active,
    &:focus {
      outline: none;
    }
  }
  textarea {
    min-height: 350px;
    resize: none;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    &:active,
    &:focus {
      outline: none;
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
  label {
    font-weight: bold;
    margin: 10px 0;
  }
`;

export const UploadButtonDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  button {
    border-radius: 5px;
    padding: 10px;
    background-color: #222;
    color: #fff;
    border: 1px solid #222;
    &:hover {
      background-color: #fff;
      color: #222;
      border: 1px solid #222;
    }

    &.cancel {
      margin-right: 10px;
      background: #ff0000;
      border: 1px solid #ff0000;
      &:hover {
        color: #ff0000;
        background: #fff;
        border: 1px solid #ff0000;
      }
    }
  }
`;
