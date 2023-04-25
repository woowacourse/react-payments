import styled from "styled-components";

const St = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
  `,
  SubmitButton: styled.input`
    align-self: flex-end;

    width: fit-content;
    height: 34px;

    background-color: white;
    border: none;
    font: 700 14px/16px "Roboto";
  `,
};

export default St;
