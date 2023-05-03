import styled from "styled-components";
import { Input, InputSection } from "components/common/Input";

const St = {
  InputSection: styled(InputSection)``,

  Input: styled(Input)`
    width: 100%;

    font-size: 15px;
    letter-spacing: 0;
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
