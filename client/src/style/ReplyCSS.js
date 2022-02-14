import styled from "styled-components";

export const RepleDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const RepleForm = styled.div`
  width: 100%;
  form {
    margin-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 7fr 1fr;
    grid-template-rows: 50px;
    @media (max-width: 756px) {
      grid-template-columns: 4fr 1fr;
      grid-template-rows: 40px;
    }
    input {
      padding: 10px;
      height: 100%;
      border-radius: 10px 0px 0px 10px;
      border: 0.5px solid #c6c6c6;

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      height: 100%;
      border-radius: 0px 10px 10px 0px;
      border: 0.5px solid #c6c6c6;
      font-weight: bold;
      background-color: #c6c6c6;
      &:hover,
      &:active {
        border: 0.5px solid darkgrey;
        background-color: darkgrey;
      }
    }
  }

  .cancel {
    display: flex;
    justify-content: flex-end;
    button {
      margin-top: 10px;
      font-size: 14px;
      border-radius: 10px;
      padding: 10px 20px;
      border: 1px solid #c6c6c6;
    }
  }
`;

export const RepleContentDiv = styled.div`
  margin: 20px 0;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0 0 5px #aaa;

  .author {
    display: flex;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .authorName {
    display: flex;
    color: #999;
    font-size: 12px;
  }

  .modalControl {
    display: flex;
    position: relative;
    top: 0;
    right: 0;

    span {
      cursor: pointer;
    }
  }

  .modalList {
    position: absolute;
    top: 15px;
    right: 10px;
    width: 80px;
    height: 60px;
    overflow: hidden;
    padding: 10px;
    cursor: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    background-color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03),
      0px 7.5px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    li {
      cursor: pointer;
      &.delete {
        color: #ff0000;
      }
    }
  }
`;
