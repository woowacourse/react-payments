import styled from "styled-components";

export const Styled = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 19px;
  `,

  ButtonContainer: styled.div`
    display: "flex";
    justify-content: "end";
  `,

  NextButton: styled.button`
    width: 51px;

    background: none;
    border: none;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    &:hover {
      cursor: pointer;
    }
  `,
};
