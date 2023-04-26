import styled from 'styled-components';
import { Text } from '../common/Text';

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  width: 200px;
  height: 120px;

  font-size: 20px;
  font-weight: 900;
  border-radius: 5px;
  background: ${(props) => props.theme.color.grey2};
`;

type NewCreditCardButtonProps = {
  helperText?: boolean;
  onClick?: () => void;
};

export const NewCreditCardButton = (props: NewCreditCardButtonProps) => {
  const { helperText, onClick } = props;

  return (
    <ButtonContainer>
      {helperText && (
        <Text size="medium" weight="bold">
          새로운 카드를 등록해주세요.
        </Text>
      )}
      <Button onClick={onClick}>+</Button>
    </ButtonContainer>
  );
};
