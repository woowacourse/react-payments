import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const titleStyle = css({
  fontSize: "18px",
  fontWeight: "700",
});

export const labelStyle = css({
  fontSize: "9.5px",
  fontWeight: 400,
  color: "#8B95A1",
});

export const CardInputWrapper = styled.div`
  h1 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 9.5px;
    font-weight: 400;
    color: #8b95a1;
  }

  label {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    text-align: left;
    color: #0a0d13;
  }
`;
