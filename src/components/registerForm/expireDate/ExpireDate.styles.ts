import styled, { css } from "styled-components";

export const Styled = {
  ExpireDateContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  `,

  ExpireDateInput: css`
    width: 65px;
    letter-spacing: 3px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
  `,

  InputContainer: styled.div`
    width: 137px;
    background: var(--input-background);
    border-radius: 7px;
  `,
};
