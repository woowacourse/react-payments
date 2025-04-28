import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { Container, ErrorMessage } from '../common/Styled';
import { ERROR_MESSAGE } from '../../utils/cardValidation';
import { useCvcContext } from '../../contexts/CvcContext';

const CVCNumberInput = () => {
  const { cvcField, handleCvcChange, cvcInputRef } = useCvcContext();

  return (
    <Container data-testid="cvcnumbers-component">
      <InputAreaHeader title="CVC 번호를 입력해 주세요" />
      <InputTexts
        dataModels={cvcField}
        inputRefs={[cvcInputRef]}
        label="CVC"
        onChange={handleCvcChange}
      />
      <ErrorMessage>
        {cvcField.hasError ? ERROR_MESSAGE.INVALID_CHARACTER : ''}
      </ErrorMessage>
    </Container>
  );
};

export default CVCNumberInput;
