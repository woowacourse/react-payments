import styled from 'styled-components';
import { Text } from './common/Text';

const StyledNewCreditCardButton = styled.button`
  width: 200px;
  height: 120px;
  font-size: 20px;
  font-weight: 900;
  border-radius: 5px;
  background: #e5e5e5;
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

type NewCreditCardButtonProps = {
  helperText?: boolean;
};

export const NewCreditCardButton = (props: NewCreditCardButtonProps) => {
  const { helperText } = props;

  return (
    <ButtonContainer>
      {helperText && (
        <Text size="medium" weight="bold">
          새로운 카드를 등록해주세요.
        </Text>
      )}
      <StyledNewCreditCardButton>+</StyledNewCreditCardButton>
    </ButtonContainer>
  );
};
