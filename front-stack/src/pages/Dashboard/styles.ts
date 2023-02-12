import styled from "styled-components";

export const ContainerDashboard = styled.main`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #c0c0c024;
  border-bottom: 0.5px solid #c0c0c024;
  h2 {
    font-size: 22px;
    font-family: Inter;
  }
  span {
    font-size: 20px;
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  button {
    width: 32.49px;
    height: 32px;
    font-size: 20px;
    background-color: #212529;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const ContainerList = styled.ul`
  min-width: 780px;
  height: 470px;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
  border-radius: 4px;
  overflow: auto;
  background-color: #212529;
  li {
    display: flex;
    width: 732px;
    height: 40px;
    box-shadow: 0px 6px 20px 0px #80808070;
    gap: 6px;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    background-color: #121214;
    animation: {
      -webkit-animation-name: zoomIn;
      animation-name: zoomIn;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes zoomIn {
      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }
      50% {
        opacity: 1;
      }
    }
    @keyframes zoomIn {
      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }
      50% {
        opacity: 1;
      }
    }
  }
  .containerTech {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
  }
  p {
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;
    color: #ffffff;
  }
  span {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: #868e96;
  }
  .btnTrash {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    color: #fff;
    margin-right: 15px;
    margin-left: 20px;
    cursor: pointer;
    svg {
      width: 13.17px;
      height: 12px;
    }
  }
`;