import styled, { css } from "styled-components";

export const Styled = {
  CardPasswordContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  `,

  PasswordInputContainer: styled.div`
    display: flex;
    align-items: center;
    column-gap: 7px;
  `,

  PasswordInput: css`
    width: 43px;

    text-align: center;
    font-size: 28px;
  `,

  DotParagraph: styled.p`
    width: 43px;
    height: 45px;

    margin: 0;

    font-size: 28px;
    text-align: center;
  `,
};
