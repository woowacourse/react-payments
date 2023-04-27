import styled from "styled-components";

const Style = {
  Page: styled.section`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    padding: 28px;
  `,
  TopSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 100%;
    height: 65%;
    gap: 36px;
  `,
  Title: styled.h1`
    align-self: center;
    font: 24px/28px "Roboto";
    letter-spacing: -0.5px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 35%;
    justify-content: space-between;
  `,

  Input: styled.input`
    border-bottom: 1.5px solid #737373;
    text-align: center;
    align-self: center;

    width: 90%;
    height: 24px;
    font: 18px/21px "Roboto";
  `,
  SubmitLayout: styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
  `,
  SubmitButton: styled.input`
    align-self: flex-end;

    width: fit-content;
    height: 34px;

    background-color: white;
    border: none;
    font: 700 14px/16px "Roboto";
  `,
};

export default Style;
