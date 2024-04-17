import Input from './common/Input';
import { ErrorText } from '../styles/common';

type MM = string;
type YY = string;

interface CardExpiryDateContainerProps {
  expiryDate: { month: MM; year: YY };
  changeHandler: {
    month: (e: React.ChangeEvent<HTMLInputElement>) => void;
    year: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  errorMessage: {
    month: string;
    year: string;
  };
  errorMessageUpdater: {
    month: () => void;
    year: () => void;
  };
}

const CardExpiryDateContainer = ({
  expiryDate,
  changeHandler,
  errorMessageUpdater,
  errorMessage,
}: CardExpiryDateContainerProps) => {
  return (
    <>
      <h1>카드 유효기간을 입력해 주세요</h1>
      <h2>월/년도(MMYY)를 순서대로 입력해 주세요.</h2>
      <label htmlFor="card-expiry-month-input">유효기간</label>
      <Input
        id="card-expiry-month-input"
        isError={!!errorMessage.month}
        value={expiryDate.month}
        onChange={changeHandler.month}
        onBlur={errorMessageUpdater.month}
        placeholder="MM"
        maxLength={2}
      />
      <Input
        id="card-expiry-year-input"
        isError={!!errorMessage.year}
        value={expiryDate.year}
        onChange={changeHandler.year}
        onBlur={errorMessageUpdater.year}
        placeholder="YY"
        maxLength={2}
      />
      <ErrorText>{errorMessage.month}</ErrorText>
      <ErrorText>{errorMessage.year}</ErrorText>
    </>
  );
};

export default CardExpiryDateContainer;
