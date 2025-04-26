import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { CVCNumberInfo } from '../../types/models';
import { Container, ErrorMessage } from '../../styles/common';

interface CVCNumberInputViewProps {
  cvcNumberInfo: CVCNumberInfo;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

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
      <ErrorMessage>{cvcNumberInfo.isError ? ERROR_MESSAGE : ''}</ErrorMessage>
    </Container>
  );
};

export default CVCNumberInputView;
