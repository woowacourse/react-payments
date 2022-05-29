import styled from "styled-components";

const PaymentButton = styled.button.attrs({ type: "button" })<{
  checked?: boolean;
}>`
  width: 147px;
  height: 40px;
  background-color: #dddddd;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  :hover {
    filter: brightness(1.05);
  }
  background-color: ${({ checked }) => checked && "#2AC1BC"};
`;

export default PaymentButton;
