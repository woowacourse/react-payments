import styled, { css } from "styled-components";

export const Styled = {
  OwnerNameInputContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  `,

  LabelContainer: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `,
  OwnerNameStyle: css`
    width: 100%;

    font-size: 18px;
    font-weight: 500;

    letter-spacing: 1px;
  `,
};
