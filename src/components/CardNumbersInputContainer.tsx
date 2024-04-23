import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputSection from './common/InputSection';
import getObjectKeys from '../utils/getObjectKeys';

type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export interface CardNumbersInputContainerProps {
  value: Record<CardNumberKey, string>;
  setValue: React.Dispatch<React.SetStateAction<Record<CardNumberKey, string>>>;
  errorStatus: { isError: Record<CardNumberKey, boolean>; errorMessage: string };
  updateErrorStatus: (key: CardNumberKey) => void;
}

const PASSWORD_INPUT_KEYS = ['third', 'fourth'];
const INPUT_TYPE = {
  text: 'text',
  password: 'password',
};

export default function CardNumberContainer({
  value,
  setValue,
  errorStatus,
  updateErrorStatus,
}: CardNumbersInputContainerProps) {
  const cardNumbersKeys = getObjectKeys(value);
  const generateOnChange = (key: CardNumberKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [key]: e.target.value });
  };

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
              key={key}
              id={`${key}-card-numbers-input`}
              isError={errorStatus.isError[key]}
              value={value[key]}
              onChange={generateOnChange(key)}
              onBlur={() => updateErrorStatus(key)}
              placeholder="1234"
              maxLength={4}
              type={type}
              width="23%"
            />
          );
        })}
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
