import styled from "styled-components";

export const ListDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ListItem = styled.div`
  margin: 20px 0;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0 0 5px #aaa;

  .title {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
  }

  a {
    color: #222;
  }
`;
