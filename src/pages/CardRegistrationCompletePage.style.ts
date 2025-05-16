import {css} from '@emotion/react';

export const pageContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 0 3.1rem 0 3.1rem;
`;

export const completeImage = css`
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background-color: #353c49;
    position: relative;

    &::after {
        content: "";
        position: absolute;

        width: 28px;
        height: 16px;

        border-left: 6px solid #fff;
        border-bottom: 6px solid #fff;
        border-radius: 3px;

        top: calc(50% - 14px);
        left: calc(50% - 16px);

        transform: rotate(-45deg);
    }
`;


export const title = css`
    margin: 25px 0 25px 0;
    font-weight: 700;
    font-size: 25px;
    line-height: 1.5;
    text-align: center;
    color: #353C49;
`;
