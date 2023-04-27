import styled from "styled-components";
import { FadeInUp } from "../common/GlobalStyle";

const Style = {
  Backdrop: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.35);
  `,
  PopUp: styled.div`
    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 34px 34px 15px 34px;

    border-radius: 8px 8px 0px 0px;
    background: #ffffff;
    ${FadeInUp}
    animation: fadeInUp 0.5s;
  `,
  Detail: styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: 100%;
    height: 90%;
  `,
};

export default Style;
