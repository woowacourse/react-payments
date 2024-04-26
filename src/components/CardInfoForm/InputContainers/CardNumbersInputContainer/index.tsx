import { ErrorWrapper, ErrorText } from '../../../../styles/common';
import InputContainer from '../../../common/InputContainer';
import useDisplayingErrorStatus from '../../../../hooks/useDisplayingErrorStatus';
import { IInputsControl } from '../../../../hooks/useInputs';
import CardNumberInputs from './CardNumberInputs';

export default function CardNumbersContainer({ value, generateOnChange, errorStatus }: IInputsControl) {
  const {
    displayingErrorStatus: { isError, errorMessage },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  return (
    <div>
      <InputContainer
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
        labelFor="first-card-numbers-input"
      >
        <CardNumberInputs
          cardNumbers={value}
          isError={isError}
          onBlur={bringErrorStatus}
          generateOnChange={generateOnChange}
        />
      </InputContainer>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
