import styled from "styled-components";

export const LoginDiv = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 50%;
  border: 1px solid #ddd;
  form {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 20px;
      padding: 10px;

      &:active,
      &:focus {
        outline: none;
      }
    }

    button {
      margin-top: 10px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #000;
      background: #000;
      color: #fff;
      &:hover {
        background: #fff;
        border: 1px solid #000;
        color: #000;
      }
    }
  }
`;
