import styled from "styled-components";

const St = {
  Contents: styled.section`
    display: flex;
    align-items: center;
    gap: 15px;
  `,
  InputSection: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 30%;
    height: 7vh;

    border-radius: 7px;

    background: #ecebf1;
  `,

  Input: styled.input`
    width: 60%;

    border: none;

    text-align: center;
    background: inherit;
    font-size: 30px;
    letter-spacing: 4px;
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

export default St;
