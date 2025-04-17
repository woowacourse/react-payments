import React from 'react';
import styled from '@emotion/styled';
import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';

export interface CardNumbersViewProps {
  cardNumbers: string[];
  errorMessage: string;
  errors: boolean[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const CardNumbersView = ({
  cardNumbers,
  errorMessage,
  errors,
  handleInputChange,
}: CardNumbersViewProps) => {
  return (
    <Container data-testid="cardnumbers-component">
      <InputLabels
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      />
      <InputTexts
        label="카드 번호"
        placeholder={['1234', '1234', '1234', '1234']}
        eventHandler={handleInputChange}
        state={cardNumbers}
        errors={errors}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default CardNumbersView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-weight: 400;
  font-size: 9.5px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: red;
  height: 9.5px;
`;
