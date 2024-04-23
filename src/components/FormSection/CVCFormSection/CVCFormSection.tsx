import styled from 'styled-components';

import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import OPTION from '../../../constants/option';

import * as Styled from '../FormSection.styled';
import useCVCFormSection from '../../../hook/useCVCFormSection';

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
    text-transform: uppercase;
  `;

interface CVCFormSectionProps {
  changeCVC: (name: string) => void;
  cvc: string;
}

const CVCFormSection = ({ changeCVC, cvc }: CVCFormSectionProps) => {

  const [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] = useCVCFormSection({ changeCVC, cvc })

  return (
    <Styled.FormSection>
      <PaymentsFormTitle title="CVC 번호를 입력해 주세요" />
      <Styled.InputForm>
        <Styled.Label>cvc</Styled.Label>
        <Styled.InputFieldContainer className="input-field-container">
          <PaymentsInputFieldUppercase
            className="cvc-form-section"
            placeholder="123"
            maxLength={OPTION.cvcMaxLength}
            value={cvc}
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

export default CVCFormSection;
