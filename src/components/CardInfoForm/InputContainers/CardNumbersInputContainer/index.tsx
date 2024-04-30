import CardNumberInputs from './CardNumberInputs';
import InputContainer from '../../../common/InputContainer';

import { IInputsControl } from '../../../../hooks/useInputs';
import { ErrorWrapper, ErrorText } from '../../../../styles/common';
import getObjectKeys from '../../../../utils/getObjectKeys';
import makeUniqueString from '../../../../utils/getUniqueId';

export default function CardNumbersContainer({ value, generateOnChange, validateValue, errorStatus }: IInputsControl) {
  const cardNumberKeys = getObjectKeys(value);
  const inputIds = cardNumberKeys.reduce<typeof value>(
    (result, key) => ({ ...result, [key]: makeUniqueString(`${key}-card-number-input`) }),
    { ...value },
  );

  return (
    <div>
      <InputContainer
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
        labelFor={inputIds.first}
      >
        <CardNumberInputs
          cardNumbers={value}
          cardNumberKeys={cardNumberKeys}
          inputIds={inputIds}
          isError={errorStatus.isError}
          validateValue={validateValue}
          generateOnChange={generateOnChange}
        />
      </InputContainer>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
