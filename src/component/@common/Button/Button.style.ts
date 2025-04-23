import { Theme, css } from '@emotion/react';

export const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  cursor: pointer;
`;

export const buttonSize = {
  large: (theme: Theme) => css`
    width: 100%;
    height: 6rem;
    padding: 1rem;

    border-radius: 10px;

    color: ${theme.color.white};
    background-color: ${theme.color.cardBlack};

    ${theme.font.button.text2}
  `,
};
