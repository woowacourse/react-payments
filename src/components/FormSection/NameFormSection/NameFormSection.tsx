import styled from 'styled-components';

import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import OPTION from '../../../constants/option';

import * as Styled from '../FormSection.styled';
import useNameFormSection from '../../../hook/useNameFormSection';

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
    text-transform: uppercase;
  `;

interface NameFormSectionProps {
  changeName: (name: string) => void;
  name: string;
}

const NameFormSection = ({ changeName, name }: NameFormSectionProps) => {

  const [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] = useNameFormSection({ changeName })

  return (
    <Styled.FormSection>
      <PaymentsFormTitle title="카드 소유자 이름을 입력해 주세요" />
      <Styled.InputForm>
        <Styled.Label>소유자 이름</Styled.Label>
        <Styled.InputFieldContainer className="input-field-container">
          <PaymentsInputFieldUppercase
            className="name-form-section"
            placeholder="FAMILY / GIVEN"
            maxLength={OPTION.nameMaxLength}
            value={name}
            hasError={inputState.errorMessage.length !== 0}
            handleValueChange={(e) => onChange(e)}
            handleOnFocus={handleOnFocus}
            handleOnBlur={handleOnBlur}
          />
        </Styled.InputFieldContainer>
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default NameFormSection;
