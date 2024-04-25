import Input from '../common/Input';
import { ErrorWrapper, ErrorText } from '../../styles/common';
import InputSection from '../common/InputSection';
import getObjectKeys from '../../utils/getObjectKeys';
import useDisplayingErrorStatus from '../../hooks/useDisplayingErrorStatus';

type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export interface CardNumbersInputContainerProps {
  value: Record<CardNumberKey, string>;
  setValue: React.Dispatch<React.SetStateAction<Record<CardNumberKey, string>>>;
  generateOnChange: (key: CardNumberKey) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateValue: (key: CardNumberKey, value: string) => void;
  errorStatus: { isError: Record<CardNumberKey, boolean>; errorMessage: string };
}

const PASSWORD_INPUT_KEYS = ['third', 'fourth'];
const INPUT_TYPE = {
  text: 'text',
  password: 'password',
};

export default function CardNumbersContainer({ value, generateOnChange, errorStatus }: CardNumbersInputContainerProps) {
  const {
    displayingErrorStatus: { isError, errorMessage },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  const cardNumbersKeys = getObjectKeys(value);

  return (
    <div>
      <InputSection
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
        labelFor="first-card-numbers-input"
      >
        {cardNumbersKeys.map(key => {
          const type = PASSWORD_INPUT_KEYS.includes(key) ? INPUT_TYPE.password : INPUT_TYPE.text;

          return (
            <Input
              onChange={generateOnChange(key)}
              key={key}
              id={`${key}-card-numbers-input`}
              isError={isError[key]}
              value={value[key]}
              onBlur={bringErrorStatus}
              placeholder="1234"
              maxLength={4}
              type={type}
              width="23%"
            />
          );
        })}
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
