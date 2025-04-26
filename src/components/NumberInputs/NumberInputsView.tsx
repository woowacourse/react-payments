import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { InputFieldState } from '../../types/models';
import { Container, ErrorMessage } from '../common/Styled';
import { ERROR_MESSAGE } from '../../utils/cardValidation';

interface NumberInputsViewProps {
  numbersInfo: InputFieldState[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const NumberInputsView = ({
  numbersInfo,
  handleInputChange,
}: NumberInputsViewProps) => {
  return (
    <Container data-testid="numbers-component">
      <InputAreaHeader
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      />
      <InputTexts
        label="카드 번호"
        dataModels={numbersInfo}
        onChange={handleInputChange}
      />
      <ErrorMessage>
        {numbersInfo.some((data) => data.hasError)
          ? ERROR_MESSAGE.INVALID_CHARACTER
          : ''}
      </ErrorMessage>
    </Container>
  );
};

export default NumberInputsView;
