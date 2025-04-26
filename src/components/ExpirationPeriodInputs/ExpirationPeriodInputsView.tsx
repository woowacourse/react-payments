import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { ExpirationPeriodInfo } from '../../types/models';
import { Container, ErrorMessage } from '../common/Styled';

interface ExpirationPeriodInputsViewProps {
  expiryDateInfo: ExpirationPeriodInfo[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const ExpirationPeriodInputsView = ({
  expiryDateInfo,
  handleInputChange,
  onFocus,
  onBlur,
}: ExpirationPeriodInputsViewProps) => {
  const errorMessage =
    expiryDateInfo.find((info) => info.isError)?.errorMessage ?? '';

  return (
    <Container data-testid="expiration-component">
      <InputAreaHeader
        title="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputTexts
        label="유효기간"
        dataModels={expiryDateInfo}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default ExpirationPeriodInputsView;
