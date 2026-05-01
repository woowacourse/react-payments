import { useState } from 'react';
import { CreditCard } from '../../core/components/creditCard';
import { FormGroup } from '../../core/components/formGroup';
import { Input } from '../../core/components/input';

import { useCVC } from './useCVC';

type ExpirationDate = {
  year: string;
  month: string;
};

export const Payments = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [onBlurCardNumber, setOnBlurCardNumber] = useState(false);

  // expirationDate 관련 상태값 -- start
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    month: '',
    year: '',
  });

  const isNumericString = (str: string) => {
    const regex = /^\d+$/;
    return regex.test(str);
  };

  const isValidMonth = (month: string) => {
    // ^0[1-9] : 0으로 시작하고 뒤에 1~9가 오거나 (01~09)
    // | : 또는
    // ^1[0-2] : 1로 시작하고 뒤에 0~2가 오는 경우 (10~12)
    const regex = /^(0[1-9]|1[0-2])$/;
    return regex.test(month);
  };

  // cardNumber --------------------------

  const validateCardNumber = (cardNumber: string) => {
    if (cardNumber.length !== 4) return false;
    return true;
  };

  const checkErrorMessageCardNumbers = (cardNumbers: string[]) => {
    if (!onBlurCardNumber) return { type: null, message: '' };

    if (cardNumbers.some((number) => number.length !== 4))
      return { type: 'length', message: '카드 번호를 전부 채워주세요' };
    if (!cardNumbers.some(isNumericString)) return { type: 'numberString', message: '숫자만 입력하세요' };
    return { type: null, message: '' };
  };

  const handleChangeCardNumber = (index: number, value: string) => {
    if (value !== '' && !isNumericString(value)) return;
    const next = [...cardNumbers];
    next[index] = value;
    setCardNumbers(next);
  };

  //--------------------------------

  const checkValidateExpirationDateMonth = (month: string) => {
    if (month.length !== 2) return false;
    if (!isNumericString(month)) return false;
    if (!isValidMonth(month)) return false;
    return true;
  };

  const checkValidateExpirationDateYear = (year: string) => {
    if (year.length !== 2) return false;
    if (!isNumericString(year)) return false;
    return true;
  };

  const checkValidateExpirationDate = (expirationDate: ExpirationDate) => {
    if (!checkValidateExpirationDateMonth(expirationDate.month)) return false;
    if (!checkValidateExpirationDateYear(expirationDate.year)) return false;
    return true;
  };

  const handleChangeExpirationDate = (key: keyof ExpirationDate, value: string) => {
    setExpirationDate({ ...expirationDate, [key]: value });
  };

  const isExpirationDateMonthValid = checkValidateExpirationDateMonth(expirationDate.month);
  const isExpirationDateYearValid = checkValidateExpirationDateYear(expirationDate.year);
  const isExpirationDateValid = checkValidateExpirationDate(expirationDate);

  // expirationDate 관련 상태값 -- end

  const cvcForm = useCVC();

  return (
    <>
      <CreditCard bank="default" cardBrand="mastercard" cardNumberList={cardNumbers} expirationDate={[]} />
      <FormGroup
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
        label="카드 번호"
        errorMessage={checkErrorMessageCardNumbers(cardNumbers).message}
      >
        {cardNumbers.map((value, index) => (
          <Input
            key={index}
            value={value}
            maxLength={4}
            placeholder="1234"
            isError={onBlurCardNumber && !validateCardNumber(cardNumbers[index])}
            onChange={(e) => handleChangeCardNumber(index, e.target.value)}
            onBlur={() => setOnBlurCardNumber(true)}
          />
        ))}
      </FormGroup>
      <FormGroup
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
        label="유효기간"
        errorMessage={!isExpirationDateValid ? '날짜 오류' : ''}
      >
        <Input
          value={expirationDate.month}
          onChange={(e) => handleChangeExpirationDate('month', e.target.value)}
          isError={!isExpirationDateMonthValid}
        />
        <Input
          value={expirationDate.year}
          onChange={(e) => handleChangeExpirationDate('year', e.target.value)}
          isError={!isExpirationDateYearValid}
        />
      </FormGroup>

      <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={cvcForm.valid ? '' : 'cvc 오류'}>
        <Input {...cvcForm.state.cvc} />
      </FormGroup>
    </>
  );
};
