import styled from "styled-components";

export const RepleDiv = styled.div`
  width: 65%;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 80%;
  }
`;

export const RepleForm = styled.div`
  width: 100%;
  form {
    margin-top: 48px;
    margin-bottom: 20px;
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

  .cancel {
    display: flex;
    justify-content: flex-end;
    button {
      font-size: 14px;
      border-radius: 5px;
      padding: 10px 25px;
      border: 1px solid #eee;
      font-weight: bold;
      color: #ff0000;
    }
  }
`;

export const RepleContentDiv = styled.div`
  padding: 24px 15px;
  border-radius: 5px;
  border-top: 1px solid #eee;

  :last-child {
    border-bottom: 1px solid #eee;
  }

  .author {
    display: flex;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .userContent {
    display: flex;

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

  .repleContent {
    width: 100%;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .modalControl {
    display: flex;
    position: relative;
    top: -10px;
    right: 0;

    .iconContent {
      cursor: pointer;
      span {
        display: none;
      }
      .icon {
        padding: 5px 0;
        padding-left: 20px;
        font-size: 20px;
        color: #666;
      }
    }
  }

  .modalList {
    position: absolute;
    top: 0px;
    right: 20px;
    width: 120px;
    height: 100px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    background-color: #fff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    li {
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      &.delete {
        color: #ff0000;
      }
    }
  }
`;
