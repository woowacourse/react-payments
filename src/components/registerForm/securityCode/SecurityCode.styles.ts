import styled, { css } from "styled-components";

export const Styled = {
  SecurityCodeContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  `,

  SecurityInput: css`
    width: 84px;
    letter-spacing: 7px;
    text-align: center;
    font-size: 28px;
  `,

  SecurityInfoContainer: styled.div`
    display: flex;
    gap: 11px;

    position: relative;
  `,

  CVVInfoContainer: styled.div`
    width: 60%;
    height: 155px;

    display: flex;
    align-items: center;
    -webkit-box-align: center;

    position: absolute;
    right: 0;
    top: -50px;

    background: rgba(0, 0, 0, 0.55);
    border-radius: 7px;

    p {
      color: white;
      font-size: 12px;
      margin-left: 10px;
    }

    img {
      height: 80px;
    }
  `,
};
