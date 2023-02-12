import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 370px;
  gap: 8px;

  h3{
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    margin: 7px auto;
    color: #868e96;
  }

  label {
    font-size: 16px;
    
    margin-bottom: 8px;
  }
  input {
    padding: 10px;
    width: 306px;
    margin: 0 auto;
    background-color: #343b41;
    border: none;
    border-radius: 6px;
    color: #fff;
  }

  button {
    width: 306px;
    height: 42px;
    border-radius: 8px;
    background-color: #607d8b;
    margin: 20px auto 20px auto;
    color: #fff;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
  }
`;