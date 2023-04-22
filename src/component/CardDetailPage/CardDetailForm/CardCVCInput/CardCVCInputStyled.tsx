import styled from "styled-components";

const Style = {
  Contents: styled.section`
    display: flex;
    align-items: center;
    gap: 15px;
  `,

  Title: styled.h1`
    padding-bottom: 10px;

    font: 500 14px/16px "Roboto";
    align-items: center;
    letter-spacing: -0.085em;

    color: #525252;
  `,

  Button: styled.button`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #969696;
    font: 500 20px/23px "Roboto";
    color: #969696;
  `,
};

export default Style;
