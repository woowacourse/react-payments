import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { Container, ErrorMessage } from '../common/Styled';
import { ERROR_MESSAGE } from '../../utils/cardValidation';
import { InputFieldState } from '../../types/models';
import { ChangeEvent, RefObject } from 'react';

interface CVCNumberInputViewProps {
  cvcNumberInfo: InputFieldState;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

const CVCNumberInputView = ({
  cvcNumberInfo,
  handleInputChange,
  inputRef,
}: CVCNumberInputViewProps) => {
  return (
    <Container data-testid="cvcnumbers-component">
      <InputAreaHeader title="CVC 번호를 입력해 주세요" />
      <InputTexts
        dataModels={cvcNumberInfo}
        inputRefs={[inputRef]}
        label="CVC"
        onChange={handleInputChange}
      />
      <ErrorMessage>
        {cvcNumberInfo.hasError ? ERROR_MESSAGE.INVALID_CHARACTER : ''}
      </ErrorMessage>
    </Container>
  );
};

export default CVCNumberInputView;
