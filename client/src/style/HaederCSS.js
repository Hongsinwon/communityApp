import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
  .topNav {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;

    .topNavMenu {
      display: flex;

      p {
        width: 65px;
        text-align: center;
        cursor: pointer;

        .delete {
          display: none;
        }

        .mypage {
          position: relative;
        }
      }

      .subMenu {
        position: absolute;
        width: 100px;
        top: 60px;
        right: 50px;
        background: #fff;
        border: 1px solid #eee;
        box-shadow: 0px 0px 15px rgb(0 0 0 / 10%), 0px 0px 6px rgb(0 0 0 / 10%);
        border-radius: 5px;

        li {
          height: 50px;
          line-height: 50px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
`;
