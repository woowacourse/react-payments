import { css } from '@emotion/react';
import theme from "../../../styles/theme";

export const buttonContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 100%;
    gap: 16px;
`;

export const defaultButton = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.cardBlack};
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 15px;

    width: 320px;
    height: 44px;
    border-radius: 5px;
`;

export const bottomButton = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.cardBlack};
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 16px;
    
    width: 100%;
    height: 52px;
`;
