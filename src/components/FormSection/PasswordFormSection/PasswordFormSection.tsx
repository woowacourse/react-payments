import styled from 'styled-components';

import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import OPTION from '../../../constants/option';

import * as Styled from '../FormSection.styled';
import usePasswordFormSection from '../../../hook/usePasswordFormSection';

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
    text-transform: uppercase;
  `;

interface PasswordFormSectionProps {
  changePassword: (name: string) => void;
  password: string;
}

const PasswordFormSection = ({ changePassword, password }: PasswordFormSectionProps) => {

  const [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] = usePasswordFormSection({ changePassword, password })
  const secureValue = (input: string) => {
    return '*'.repeat(input.length)
  }
  return (
    <Styled.FormSection>
      <PaymentsFormTitle title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해주세요" />
      <Styled.InputForm>
        <Styled.Label>비밀번호 앞 2자리</Styled.Label>
        <Styled.InputFieldContainer className="input-field-container">
          <PaymentsInputFieldUppercase
            className="password-form-section"
            placeholder="123"
            maxLength={OPTION.passwordMaxLength}
            value={secureValue(password)}
            hasError={inputState.errorMessage.length !== 0}
            handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
            handleOnFocus={handleOnFocus}
            handleOnBlur={handleOnBlur}
          />
        </Styled.InputFieldContainer>
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default PasswordFormSection;
