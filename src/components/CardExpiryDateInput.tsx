import { useState } from 'react';

interface CardExpiryDateInputProps {
  expiryMonth: string;
  setExpiryMonth: React.Dispatch<React.SetStateAction<string>>;
  setExpiryYear: React.Dispatch<React.SetStateAction<string>>;
  expiryYear: string;
}

function CardExpiryDateInput(props: CardExpiryDateInputProps) {
  const [isExpiryMonthError, setIsExpiryMonthError] = useState<null | string>(null);
  const [isExpiryYearError, setIsExpiryYearError] = useState<null | string>(null);

  const validateMonth = () => {
    if (props.expiryMonth.length < 2) return setIsExpiryMonthError('만료월은 2자리로 입력해주세요');
    return setIsExpiryMonthError(null);
  };

  const validateYear = () => {
    if (props.expiryYear.length < 2) return setIsExpiryYearError('만료년도 2자리로 입력해주세요');
    return setIsExpiryYearError(null);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          min={1}
          max={12}
          value={props.expiryMonth}
          onChange={(e) => props.setExpiryMonth(e.target.value)}
          onBlur={() => validateMonth()}
          style={isExpiryMonthError ? { borderColor: 'red' } : {}}
        />
        <p>{isExpiryMonthError}</p>
      </div>
      <div>
        <input
          type="number"
          min={1}
          max={12}
          value={props.expiryYear}
          onChange={(e) => props.setExpiryYear(e.target.value)}
          onBlur={() => validateYear()}
          style={isExpiryYearError ? { borderColor: 'red' } : {}}
        />
        <p>{isExpiryYearError}</p>
      </div>
    </div>
  );
}

export default CardExpiryDateInput;
