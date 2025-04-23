import React from 'react';
import styled from '@emotion/styled';
import FormLabel from '../common/FormLabel';
import InputTexts from '../common/InputTexts';

export interface CardPasswordViewProps {
  passwordNumbers: string;
  errorMessage: string;
  error: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardPasswordView = ({
  passwordNumbers,
  errorMessage,
  error,
  handleInputChange,
}: CardPasswordViewProps) => {
  return (
    <Container data-testid='passwordNumbers-component'>
      <FormLabel
        title='비밀번호를 입력해 주세요'
        caption='앞의 2자리를 입력해주세요'
      />
      <InputTexts
        label='비밀번호 앞 2자리'
        placeholder={['00']}
        state={passwordNumbers}
        eventHandler={handleInputChange}
        errors={[error]}
        type='password'
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default CardPasswordView;

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
