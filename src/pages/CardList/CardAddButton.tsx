import styled from 'styled-components';

type CardAddButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CardAddButton = ({ onClick }: CardAddButtonProps) => {
  return (
    <Styled.Button type="button" bgColor="#E5E5E5" onClick={onClick}>
      <Styled.PlusWrapper>+</Styled.PlusWrapper>
    </Styled.Button>
  );
};

export default CardAddButton;

type ButtonProps = {
  bgColor: string;
};

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 213px;
  height: 133px;
  padding: 13px;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  & > * {
    color: white;
    font-size: 12px;
  }

  :hover {
    background-color: #f4f4f4;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);

    div {
      color: #797979;
    }
  }
`;

const PlusWrapper = styled.div`
  width: 100%;
  font-size: 30px;
  color: #575757;
`;

const Styled = {
  Button,
  PlusWrapper,
};
