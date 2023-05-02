import styled from "styled-components";
import { Input, InputSection } from "../../../common/Input";

const St = {
  InputSection: styled(InputSection)`
    width: 30%;
  `,

  Input: styled(Input)`
    width: 80%;

    font-size: 26px;
  `,

  Contents: styled.section`
    display: flex;
    align-items: center;
    gap: 15px;
  `,

  Title: styled.h1`
    align-items: center;
    padding-bottom: 10px;

    font: 500 14px/16px "Roboto";
    letter-spacing: -0.085em;
    color: #525252;
  `,

  Button: styled.button`
    width: 35px;
    height: 35px;
    border: 1px solid #969696;
    border-radius: 50%;

    background-color: white;
    font: 500 20px/23px "Roboto";
    color: #969696;
  `,
};

export default St;
