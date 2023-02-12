import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
 
  input {
    padding: 10px;
    width: 306px;
    margin: 0 auto;
    background-color: #343b41;
    border-radius: 6px;
    color: #fff;
    border: none;
  }
  button {
    width: 306px;
    height: 42px;
    border-radius: 8px;
    background-color: #607d8b;
    margin: 10px auto 20px auto;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  p {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    background-color: #868e96;
    padding: 10px;
    width: 306px;
    margin: 20px auto;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #f8f9fa;
    font-size: 20px;
    cursor: pointer;
  }
`;