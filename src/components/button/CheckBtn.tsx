import styled from "@emotion/styled";
interface Props {
  onClick: () => void;
}
export default function CheckBtn({ onClick }: Props) {
  return (
    <Footer>
      <BTN onClick={onClick}>확인</BTN>
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
