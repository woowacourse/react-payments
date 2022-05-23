import styled from "styled-components";

const PaymentLabel = styled.div<{ styleType?: string }>`
  font-size: 16px;
  border-bottom: 3px solid #dddddd;

  border-bottom-color: ${({ styleType }) =>
    styleType === "holding-card" && "#dddddda0"};
`;

export default PaymentLabel;
