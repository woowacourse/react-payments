import styled from "styled-components";

const St = {
  InputSection: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 100%;
    height: 7vh;

    border-radius: 7px;

    background: #ecebf1;
  `,

  Input: styled.input`
    width: 100%;

    border: none;

    text-align: center;
    background: inherit;
    font-size: 15px;
  `,

  Title: styled.h1`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;

    align-items: center;

    font: 500 14px/16px "Roboto";
    letter-spacing: -0.085em;
    color: #525252;
  `,
};

export default St;
