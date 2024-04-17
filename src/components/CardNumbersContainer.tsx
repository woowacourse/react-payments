import Input from './common/Input';
import { ErrorText } from '../styles/common';

export interface CardNumbersContainerProps {
  cardNumbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  generateChangeHandler: (targetKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  generateErrorMessageUpdater: (targetKey: string) => () => void;
}

export default function CardNumberContainer({
  cardNumbers,
  generateChangeHandler,
  errorMessage,
  generateErrorMessageUpdater,
}: CardNumbersContainerProps) {
  const arr = ['first', 'second', 'third', 'fourth'] as const;
  return (
    <>
      <h1>결제할 카드 번호를 입력해 주세요</h1>
      <h2>본인 명의의 카드만 결제 가능합니다.</h2>
      <label htmlFor="first-card-numbers-input">카드 번호</label>
      {arr.map(key => {
        const PASSWORD_INPUT_KEYS = ['third', 'fourth'];
        const type = PASSWORD_INPUT_KEYS.includes(key) ? 'password' : 'text';

        return (
          <Input
            key={key}
            id={`${key}-card-numbers-input`}
            isError={!!errorMessage[key]}
            value={cardNumbers[key]}
            onChange={generateChangeHandler(key)}
            onBlur={generateErrorMessageUpdater(key)}
            placeholder="1234"
            maxLength={4}
            type={type}
          />
        );
      })}
      {arr.map(key => (
        <ErrorText key={key}>{errorMessage[key]}</ErrorText>
      ))}
    </>
  );
}
