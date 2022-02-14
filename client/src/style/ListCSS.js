import styled from "styled-components";

export const ListDiv = styled.div`
  width: 80%;
  margin: 0 auto;

  .listOption {
    margin-top: 32px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;

    input {
      padding: 0 10px;
      width: 40%;
      border: 1px solid #ddd;
      border-radius: 5px;

      &:active,
      &:focus {
        outline: none;
        border: 1px solid #10ce72;
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
    border-bottom: 1px solid #eee;
  }
`;

export const ListItem = styled.div`
  padding: 20px 24px;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;

  .title {
    font-size: 24px;
    font-weight: bold;
  }
`;
