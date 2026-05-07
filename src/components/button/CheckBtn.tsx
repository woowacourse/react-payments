import styled from "@emotion/styled";
export default function CheckBtn() {
  return (
    <Footer>
      <BTN>확인</BTN>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
`;
const BTN = styled.button`
  bottom: 0;
  left: 50%;
  width: 100%;
  background-color: #333333;
  color: white;
  min-height: 52px;
  cursor: pointer;
`;
