import styled from "styled-components";

export const Styled = {
  WholeCardContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  `,

  CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0 0 0;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.085em;

      color: #525252;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  `,
};
