import styled from "styled-components";

const Style = {
  ImgButtonSection: styled.section`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 62px;

    align-items: center;
    margin-bottom: 26px;
  `,
  Button: styled.button`
    background-color: transparent;
    cursor: pointer;
  `,
  Img: styled.img`
    width: 37px;
    height: 37px;
  `,
  Title: styled.h1`
    margin-top: 10px;
    text-align: center;
    font: 500 12px/14px "Roboto";
  `,
};

export default Style;
