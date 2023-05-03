import styled from "styled-components";
import { Input, InputSection } from "components/common/Input";

const St = {
  InputSection: styled(InputSection)`
    width: 45%;
  `,

  Input: styled(Input)`
    font: 600 18px/20px "Roboto";
  `,

  Title: styled.h1`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;

    align-items: center;

    font: 500 14px/16px "Roboto";
    letter-spacing: -0.085em;
    color: #525252;
  `,
};

export default St;
