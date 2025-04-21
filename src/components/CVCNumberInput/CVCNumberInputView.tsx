import React from 'react';
import styled from '@emotion/styled';
import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';

export interface CVCNumberInputViewProps {
  cvcNumbers: string[];
  errorMessage: string;
  isError: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CVCNumberInputView = ({
  cvcNumbers,
  errorMessage,
  isError,
  handleInputChange,
}: CVCNumberInputViewProps) => {
  return (
    <Container data-testid="cvcnumbers-component">
      <InputLabels title="CVC 번호를 입력해 주세요" />
      <InputTexts
        label="CVC"
        placeholder={['123']}
        state={cvcNumbers}
        eventHandler={handleInputChange}
        isErrors={[isError]}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default CVCNumberInputView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.error};
  height: ${({ theme }) => theme.fontSizes.caption};
`;
