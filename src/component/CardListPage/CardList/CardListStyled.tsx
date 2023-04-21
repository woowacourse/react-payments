import styled from "styled-components";

const Style = {
  ListSection: styled.ul`
    display: flex;
    flex-direction: column;

    gap: 50px;
    align-items: center;
  `,

  Title: styled.h1`
    height: fit-content;

    text-align: center;
    font: 700 14px/16px "Roboto";
    color: #575757;
  `,
};

export default Style;
