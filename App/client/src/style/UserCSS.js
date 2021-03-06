import styled from "styled-components";

export const LoginDiv = styled.div`
  position: fixed;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;

  @media (max-width: 750px) {
    width: 60%;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #666;
    }

    input {
      margin-bottom: 24px;
      padding: 0 16px;
      height: 50px;
      line-height: 50px;
      border: 1px solid #ddd;
      border-radius: 5px;

      &:active,
      &:focus {
        outline: none;
        border: 1px solid #10ce72;
      }
    }

    // 로그인버튼
    .loginBtn {
      margin-top: 24px;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
      border: 1px solid #10ad62;
      background: #10ad62;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      transition: all 0.5s;

      &:hover {
        border: 1px solid #10ce72;
        background: #10ce72;
      }
    }

    // 회원가입
    .signUp {
      margin-top: 36px;
      border: none;
      background: transparent;
      text-decoration: underline;
      color: #555;
      transition: all 0.5s;

      &:hover {
        color: #10ad62;
      }
    }

    // 로그인 에러버튼
    .loginError {
      text-align: center;
      font-size: 14px;
      color: #ff0000;
    }

    // 사용가능
    .possibility {
      margin-left: 8px;
      font-size: 12px;
      color: #00ac00;
      font-weight: normal;
    }

    .impossible {
      margin-left: 8px;
      font-size: 12px;
      color: #ff0000;
      font-weight: normal;
    }
    .center {
      text-align: center;
    }
  }

  .nickName {
    margin-bottom: 24px;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    border: 1px solid #10ce72;
    background: #10ce72;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.5s;
  }
`;

export const MypageDiv = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 90px;
  @media (max-width: 1200px) {
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;

    .userImage {
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
    }

    label {
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #666;

      // 사용가능
      .possibility {
        margin-left: 8px;
        font-size: 12px;
        color: #00ac00;
        font-weight: normal;
      }
      //사용불가능
      .impossible {
        margin-left: 8px;
        font-size: 12px;
        color: #ff0000;
        font-weight: normal;
      }
    }
    input {
      margin-bottom: 16px;
      padding: 0 16px;
      height: 50px;
      line-height: 50px;
      border: 1px solid #ddd;
      border-radius: 5px;

      &:active,
      &:focus {
        outline: none;
        border: 1px solid #10ce72;
      }
    }

    .nickName {
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
      background: rgb(16 206 114 / 10%);
      border: 1px solid rgb(16 206 114 / 10%);
      color: #10ce72;
      font-size: 18px;
      font-weight: bold;
    }

    .saveBtn {
      margin-top: 48px;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
      background: #10ce72;
      border: 1px solid #10ce72;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
