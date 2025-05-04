import { Theme, css } from '@emotion/react';

export const buttonDefaultStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  cursor: pointer;
`;

export const buttonStyle = (theme: Theme) => ({
  black: css`
    color: ${theme.color.white};
    background-color: ${theme.color.cardBlack};
  `,
  gray: css`
    color: ${theme.color.cardBlack};
    background-color: ${theme.color.gray};
  `,
});

export const buttonSize = {
  large: (theme: Theme) => css`
    width: 100%;
    height: 6rem;
    padding: 1rem;

    border-radius: 10px;

    ${theme.font.button.text2}
  `,
  small: (theme: Theme) => css`
    width: 100%;
    height: 4rem;
    padding: 1rem;

    border-radius: 10px;

    ${theme.font.button.text2}
  `,
};
