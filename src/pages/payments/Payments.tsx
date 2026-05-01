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
  const [onBlurCardNumber, setOnBlurCardNumber] = useState([false, false, false, false]);

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

  // card Preview
  const renderBrandCard = (cardNumbers: string[]) => {
    if (cardNumbers[0].startsWith('4')) return 'visa';
    if (['51', '52', '53', '54', '55'].some((brandNumber) => cardNumbers[0].startsWith(brandNumber)))
      return 'mastercard';
    return 'default';
  };

  // cardNumber --------------------------

  const validateCardNumber = (cardNumber: string) => {
    if (!isNumericString(cardNumber)) return false;
    if (cardNumber.length > 4) return false;
    return true;
  };

  const renderErrorMessageCardNumbers = (cardNumbers: string[]) => {
    const cardErrorMap = [...cardNumbers].map((cardNumber) => checkErrorMessageCardNumber(cardNumber)?.type);
    if (cardErrorMap.some((error) => error === 'length'))
      return { type: 'length', message: '카드 번호를 전부 채워주세요' };

    return { type: null, message: '' };
  };

  // 개별 카드 번호 input 유효성 검사 확인 함수
  const checkErrorMessageCardNumber = (cardNumber: string) => {
    if (cardNumber.length !== 4) return { type: 'length' };

    return { type: '' };
  };

  const handleChangeCardNumber = (index: number, value: string) => {
    if (!validateCardNumber(value)) return;
    const next = [...cardNumbers];
    next[index] = value;
    setCardNumbers(next);
  };

  const handleBlurCardNumber = (index: number) => {
    const next = [...onBlurCardNumber];
    next[index] = true;
    setOnBlurCardNumber(next);
  };

  //--------------------------------
  const checkValidateExpirationDate = (expirationDate: ExpirationDate) => {
    return {
      month:
        expirationDate.month.length === 2 &&
        isNumericString(expirationDate.month) &&
        isValidMonth(expirationDate.month),
      year: expirationDate.year.length === 2 && isNumericString(expirationDate.year),
    };
  };

  const handleChangeExpirationDate = (key: keyof ExpirationDate, value: string) => {
    setExpirationDate({ ...expirationDate, [key]: value });
  };

  const isExpirationDateValid = checkValidateExpirationDate(expirationDate);

  // expirationDate 관련 상태값 -- end

  const cvcForm = useCVC();

  return (
    <>
      <CreditCard
        bank="default"
        cardBrand={renderBrandCard(cardNumbers)}
        cardNumberList={cardNumbers}
        expirationDate={[]}
      />
      <FormGroup
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
        label="카드 번호"
        errorMessage={renderErrorMessageCardNumbers(cardNumbers)?.message}
      >
        {cardNumbers.map((value, index) => (
          <Input
            type="text"
            key={index}
            value={value}
            maxLength={4}
            placeholder="1234"
            isError={onBlurCardNumber[index] && !validateCardNumber(cardNumbers[index])}
            onChange={(e) => handleChangeCardNumber(index, e.target.value)}
            onBlur={() => handleBlurCardNumber(index)}
          />
        ))}
      </FormGroup>
      <FormGroup
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
        label="유효기간"
        errorMessage={!(isExpirationDateValid.month && isExpirationDateValid.year) ? '날짜 오류' : ''}
      >
        <Input
          type="tel"
          value={expirationDate.month}
          onChange={(e) => handleChangeExpirationDate('month', e.target.value)}
          isError={!isExpirationDateValid.month}
        />
        <Input
          type="tel"
          value={expirationDate.year}
          onChange={(e) => handleChangeExpirationDate('year', e.target.value)}
          isError={!isExpirationDateValid.year}
        />
      </FormGroup>

      <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={cvcForm.valid ? '' : 'cvc 오류'}>
        <Input {...cvcForm.state.cvc} />
      </FormGroup>
    </>
  );
};
