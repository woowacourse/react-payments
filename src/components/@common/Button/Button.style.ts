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
    z-index: 100;
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
    cursor: pointer;

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
    cursor: pointer;
    
    width: 428px;
    height: 52px;
`;
