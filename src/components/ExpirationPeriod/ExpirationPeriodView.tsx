import React from 'react';
import styled from '@emotion/styled';
import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';

export interface ExpirationPeriodViewProps {
  period: string[];
  errorMessage: string;
  errors: boolean[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const ExpirationPeriodView = ({
  period,
  errorMessage,
  errors,
  handleInputChange,
  onFocus,
  onBlur,
}: ExpirationPeriodViewProps) => {
  return (
    <Container data-testid='expiration-component'>
      <InputLabels
        title='카드 유효기간을 입력해 주세요'
        caption='월/년도(MMYY)를 순서대로 입력해 주세요.'
      />
      <InputTexts
        label='유효기간'
        placeholder={['MM', 'YY']}
        state={period}
        eventHandler={handleInputChange}
        errors={errors}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default ExpirationPeriodView;

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
