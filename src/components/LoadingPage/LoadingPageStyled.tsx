import { Page } from "components/common/Page";
import styled from "styled-components";

const St = {
  Page: styled(Page)`
    flex-direction: column;
    justify-content: center;
    gap: 45px;

    height: 100vh;
  `,

  Title: styled.h2`
    align-items: center;

    text-align: center;
    font: 600 20px "Roboto";
    color: #525252;
  `,

  Loader: styled.span`
    align-self: center;

    display: block;
    position: relative;
    width: 170px;
    height: 110px;
    border-radius: 10px;
    background: #d9d9d9;
    box-sizing: border-box;

    :before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 85px;
      height: 110px;
      border-radius: 10px;
      background: #333333;
      animation: ballbns 1s ease-in-out infinite alternate;
    }

    @keyframes ballbns {
      0% {
        left: 0;
        transform: translateX(0%);
      }
      100% {
        left: 100%;
        transform: translateX(-100%);
      }
    }
  `,
};

export default St;
