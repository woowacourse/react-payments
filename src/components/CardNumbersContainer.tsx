import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import RegistrationLayout from './common/RegistrationLayout';

type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export interface CardNumbersContainerProps {
  data: Record<CardNumberKey, string>;
  setData: React.Dispatch<React.SetStateAction<Record<CardNumberKey, string>>>;
  errorStatus: { isError: Record<CardNumberKey, boolean>; errorMessage: string };
  updateErrorStatus: (key: CardNumberKey) => void;
}

export default function CardNumberContainer({
  data,
  setData,
  errorStatus,
  updateErrorStatus,
}: CardNumbersContainerProps) {
  const arr = ['first', 'second', 'third', 'fourth'] as const;
  const generateOnChange = (key: CardNumberKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [key]: e.target.value });
  };

  return (
    <div>
      <RegistrationLayout
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        labelText="카드 번호"
        labelFor="first-card-numbers-input"
      >
        {arr.map(key => {
          const PASSWORD_INPUT_KEYS = ['third', 'fourth'];
          const type = PASSWORD_INPUT_KEYS.includes(key) ? 'password' : 'text';

          return (
            <Input
              key={key}
              id={`${key}-card-numbers-input`}
              isError={errorStatus.isError[key]}
              value={data[key]}
              onChange={generateOnChange(key)}
              onBlur={() => updateErrorStatus(key)}
              placeholder="1234"
              maxLength={4}
              type={type}
              width="23%"
            />
          );
        })}
      </RegistrationLayout>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
