import styled from 'styled-components';
import { Text } from '../common/Text';

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: 200px;
  height: 120px;
`;

type ButtonProps = {
  $rounded?: boolean;
};

const Button = styled.button<ButtonProps>`
  // NOTE: RoundedButton, Button 두 개로 분리할 시 서로 다른 Element로 인식되어
  // DOM 노드의 삭제와 생성이 일어나 transition이 동작하지 않음, 따라서
  // 하나의 파일에서 rounded에 대한 스타일 처리를 하도록 설정
  width: ${(props) => (props.$rounded ? '80px' : '200px')};
  height: ${(props) => (props.$rounded ? '80px' : '120px')};

  margin: ${(props) => (props.$rounded ? '20px' : '0')} 0;

  font-size: 20px;
  font-weight: 900;
  border-radius: ${(props) => (props.$rounded ? '48px' : '5px')};
  background: ${(props) => props.theme.color.grey3};

  transition-property: width height border-radius margin;
  transition-duration: 0.1s;
`;

type NewCreditCardButtonProps = {
  rounded?: boolean;
  helperText?: boolean;
  onClick?: () => void;
};

export const NewCreditCardButton = (props: NewCreditCardButtonProps) => {
  const { rounded, helperText, onClick } = props;

  return (
    <ButtonContainer>
      {helperText && (
        <Text size="medium" weight="bold">
          새로운 카드를 등록해주세요.
        </Text>
      )}
      <Button $rounded={rounded} onClick={onClick}>
        +
      </Button>
    </ButtonContainer>
  );
};
