import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { InputFieldState } from '../../types/models';
import { Container, ErrorMessage } from '../common/Styled';
import { ChangeEvent, FocusEvent, RefObject } from 'react';

interface ExpirationPeriodInputsViewProps {
  expiryDateInfo: InputFieldState[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  expiryInputRefs: RefObject<HTMLInputElement | null>[];
  onFocus: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

const ExpirationPeriodInputsView = ({
  expiryDateInfo,
  handleInputChange,
  expiryInputRefs,
  onFocus,
  onBlur,
}: ExpirationPeriodInputsViewProps) => {
  const errorMessage =
    expiryDateInfo.find((info) => info.hasError)?.errorMessage ?? '';

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
        inputRefs={expiryInputRefs}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default ExpirationPeriodInputsView;
