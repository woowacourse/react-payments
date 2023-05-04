import styled, { css } from "styled-components";

export const Styled = {
  CardNumberInputContainer: styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

    width: 100%;
    height: 45px;

    border-radius: 7px;
    background-color: #ecebf1;
    padding: 0 10px;
  `,

  CardNumberInput: css`
    width: 70px;
    letter-spacing: 3px;
    text-align: center;
    font-size: 18px;
  `,
};
