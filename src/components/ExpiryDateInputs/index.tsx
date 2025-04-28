import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { Container, ErrorMessage } from '../common/Styled';
import { useExpiryDateContext } from '../../contexts/ExpiryDateContext';

const ExpiryDateInputs = () => {
  const {
    expiryFields,
    handleExpiryChange,
    expiryInputRefs,
    showPeriodSeparator,
    hidePeriodSeparator,
  } = useExpiryDateContext();
  const errorMessage =
    expiryFields.find((info) => info.hasError)?.errorMessage ?? '';

  return (
    <Container data-testid="expiration-component">
      <InputAreaHeader
        title="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputTexts
        label="유효기간"
        dataModels={expiryFields}
        onChange={handleExpiryChange}
        inputRefs={expiryInputRefs}
        onFocus={showPeriodSeparator}
        onBlur={hidePeriodSeparator}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default ExpiryDateInputs;
