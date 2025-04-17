import React from 'react';
import styled from '@emotion/styled';
import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';

export interface CVCNumbersViewProps {
  cvcNumbers: string[];
  errorMessage: string;
  error: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CVCNumbersView = ({
  cvcNumbers,
  errorMessage,
  error,
  handleInputChange,
}: CVCNumbersViewProps) => {
  return (
    <Container data-testid="cvcnumbers-component">
      <InputLabels title="CVC 번호를 입력해 주세요" />
      <InputTexts
        label="CVC"
        placeholder={['123']}
        state={cvcNumbers}
        eventHandler={handleInputChange}
        errors={[error]}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default CVCNumbersView;

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
  vertical-align: middle;
  color: red;
  height: 9.5px;
`;
