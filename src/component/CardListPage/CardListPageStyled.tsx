import styled from "styled-components";
import { Page } from "../common/Page";

const St = {
  Title: styled.h1`
    align-items: center;
    font: 400 17px "Roboto";
    letter-spacing: -2px;
    color: #525252;
  `,
  Page: styled(Page)`
    gap: 25px;
  `,
};

export default St;
