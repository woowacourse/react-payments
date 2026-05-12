import styled from "@emotion/styled";
interface Props {
  onClick: () => void;
}

export default function CheckBtn({ onClick }: Props) {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>확인</Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  width: 100%;
`;

const Button = styled.button`
  bottom: 0;
  left: 50%;
  width: 100%;
  background-color: #333333;
  color: white;
  min-height: 52px;
  cursor: pointer;
`;
