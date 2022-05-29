import styled, { css } from "styled-components";

const PaymentLabel = styled.div<{ styleType?: string }>`
  font-size: 16px;
  border-bottom: 3px solid #dddddd;

  ${({ styleType }) =>
    styleType === "holding-card" &&
    css`
      display: inline-block;
      border-bottom-color: "#dddddda0";
      margin-bottom: 40px;
    `};
`;

export default PaymentLabel;
