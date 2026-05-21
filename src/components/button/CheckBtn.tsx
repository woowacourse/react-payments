import styled from "@emotion/styled";
interface Props {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function CheckBtn({ onClick, children, disabled }: Props) {
  return (
    <ButtonWrapper>
      <Button onClick={onClick} disabled={disabled}>
        {children ?? "확인"}
      </Button>
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
