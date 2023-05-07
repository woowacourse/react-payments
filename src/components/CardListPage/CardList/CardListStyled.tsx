import styled from "styled-components";

const St = {
  ListSection: styled.ul`
    display: flex;
    flex-direction: column;

    gap: 40px;
    align-items: center;
  `,

  List: styled.li`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  Title: styled.h1`
    height: fit-content;

    text-align: center;
    font: 700 16px/18px "Roboto";
    color: #575757;
  `,
};

export default St;
