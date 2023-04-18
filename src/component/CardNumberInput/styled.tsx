import styled from "styled-components";

const St = {
  InputSection: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 100vw;
    height: 7vh;

    border-radius: 7px;

    background: #ecebf1;
  `,

  Input: styled.input`
    width: 15%;

    border: none;

    text-align: center;
    background: inherit;
    font-size: 20px;
  `,

  Title: styled.div`
    padding-bottom: 10px;

    font: 500 14px/16px "Roboto";
    align-items: center;
    letter-spacing: -0.085em;

    color: #525252;
  `,
};

export default St;
