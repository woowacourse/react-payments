import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { CVCNumberInfo } from '../../types/models';
import { Container, ErrorMessage } from '../common/Styled';
import { ERROR_MESSAGE } from '../../utils/cardValidation';

interface CVCNumberInputViewProps {
  cvcNumberInfo: CVCNumberInfo;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CVCNumberInputView = ({
  cvcNumberInfo,
  handleInputChange,
}: CVCNumberInputViewProps) => {
  return (
    <Container data-testid="cvcnumbers-component">
      <InputAreaHeader title="CVC 번호를 입력해 주세요" />
      <InputTexts
        dataModels={cvcNumberInfo}
        label="CVC"
        onChange={handleInputChange}
      />
      <ErrorMessage>
        {cvcNumberInfo.isError ? ERROR_MESSAGE.INVALID_CHARACTER : ''}
      </ErrorMessage>
    </Container>
  );
};

export default CVCNumberInputView;
