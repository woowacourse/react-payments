import styled from "styled-components";

const Style = {
  Page: styled.section`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    padding: 28px;
  `,
  CardSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 100%;
    height: 70%;
    gap: 18px;
  `,
  Title: styled.h1`
    align-self: center;
    font: 24px/28px "Roboto";
    letter-spacing: -0.5px;
  `,
  subTitle: styled.h2`
    align-self: center;
    font: 18px/20px "Roboto";
    letter-spacing: -0.5px;
  `,
};

export default Style;
