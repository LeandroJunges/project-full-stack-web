import styled from "styled-components";

export const HeaderLogin = styled.div`
  width: 100%;
  height: 50px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  
  h1 {
    color: #607d8b;
    font-size: 26px;
  }
`;

export const HeaderDash = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 40px auto 20px auto;
  h1 {
    color: #607d8b;
    font-size: 26px;
  }
  button {
    width: 68px;
    height: 40px;
    background-color: #212529;
    border-radius: 4px;
    color: #f8f9fa;
    border: none;
    cursor: pointer;
  }
`;