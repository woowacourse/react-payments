import styled from "styled-components";
import { Input, InputSection } from "../../../common/Input";

const St = {
  Contents: styled.section`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  InputSection: styled(InputSection)`
    width: 17%;
  `,

  Input: styled(Input)`
    width: 60%;

    font-size: 30px;
  `,
  Title: styled.h1`
    padding-bottom: 10px;

    font: 500 14px/16px "Roboto";
    align-items: center;
    letter-spacing: -0.085em;

    color: #525252;
  `,

  LastDigits: styled.div`
    text-align: center;
    width: 15%;
    font-size: 30px;
  `,
};

export default St;
