import styled from "styled-components";

const St = {
  Contents: styled.section`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  InputSection: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 17%;
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
  `,

  Title: styled.h1`
    padding-bottom: 10px;

    font: 500 14px/16px "Roboto";
    align-items: center;
    letter-spacing: -0.085em;

    color: #525252;
  `,

  LastDigits: styled.div`
    text-align: center;
    width: 15%;
    font-size: 30px;
  `,
};

export default St;
