import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 999;

  .topNav {
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 80%;
    }

    img {
      margin-top: 12px;
      height: 26px;
    }

    .topNavMenu {
      display: flex;

      p {
        width: 65px;
        text-align: right;
        cursor: pointer;
        color: #555;
        transition: all 0.3s;
        &:hover {
          color: #10ce72;
          text-decoration: underline;
        }

        .delete {
          display: none;
        }

        .icon {
          font-size: 20px;
          transition: all 0.3s;
          color: #555;

          &:hover {
            color: #10ce72;
          }
        }

        .mypage {
          position: relative;
        }
      }

      .subMenu {
        position: absolute;
        width: 140px;
        top: 60px;
        background: #fff;
        border: 1px solid #eee;
        box-shadow: 0px 0px 15px rgb(0 0 0 / 5%);
        border-radius: 5px;

        li {
          height: 50px;
          line-height: 50px;
          text-align: center;
          cursor: pointer;
        }
        .logout {
          color: #ff0000;
        }
      }
    }
  }
`;
