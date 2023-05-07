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
};

export default St;
