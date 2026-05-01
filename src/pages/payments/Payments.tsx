import { useState } from 'react';
import { CreditCard } from '../../core/components/creditCard';
import { FormGroup } from '../../core/components/formGroup';
import { Input } from '../../core/components/input';

type ExpirationDate = {
  year: string;
  month: string;
};

export const Payments = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [onBlurCardNumber, setOnBlurCardNumber] = useState([false, false, false, false]);

  const [cvc, setCvc] = useState('');
  const [onBlurCvc, setOnBlurCvc] = useState(false);

  const isNumericString = (str: string) => {
    const regex = /^\d+$/;
    return regex.test(str);
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
    if (cardNumber.length !== 4) return false;
    return true;
  };

  const preventCardNumber = (cardNumber: string) => {
    if (cardNumber === '') return false;
    if (isNumericString(cardNumber)) return false;
    if (cardNumber.length > 4) return false;
    return true;
  };

  const renderErrorMessageCardNumbers = (cardNumbers: string[]) => {
    if (onBlurCardNumber.every((blur) => !blur)) return '';
    if (cardNumbers.some((cardNumber) => cardNumber.length !== 4)) return '카드 번호를 전부 채워주세요';
    return '';
  };

  // 개별 카드 번호 input 유효성 검사 확인 함수

  const handleChangeCardNumber = (index: number, value: string) => {
    if (preventCardNumber(value)) return;
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

  // expirationDate 관련 상태값 -- start
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    month: '',
    year: '',
  });

  const [onBlurExpirationDate, setOnBlurExpirationDate] = useState({
    month: false,
    year: false,
  });

  const isValidMonth = (month: string) => {
    // ^0[1-9] : 0으로 시작하고 뒤에 1~9가 오거나 (01~09)
    // | : 또는
    // ^1[0-2] : 1로 시작하고 뒤에 0~2가 오는 경우 (10~12)
    const regex = /^(0[1-9]|1[0-2])$/;
    return regex.test(month);
  };

  const validateExpirationDate = (expirationDate: ExpirationDate) => {
    return {
      month:
        expirationDate.month.length === 2 &&
        isNumericString(expirationDate.month) &&
        isValidMonth(expirationDate.month),
      year: expirationDate.year.length === 2 && isNumericString(expirationDate.year),
    };
  };

  const preventExpirationMonth = (month: string) => {
    if (!isNumericString(month)) return false;
    if (month.length > 2) return false;

    console.log('preventExpirationMonth', expirationDate.month);

    return true;
  };

  const preventExpirationYear = (expirationDate: ExpirationDate) => {
    if (!isNumericString(expirationDate.year)) return false;
    if (expirationDate.year.length > 2) return false;

    return true;
  };

  const renderErrorMessageExpirationDate = (expirationDate: ExpirationDate) => {
    // if (Object.values(onBlurExpirationDate).((blur) => !blur)) return '';

    if (!validateExpirationDate(expirationDate)) return '유효기간을 전부 채워주세요';
    return '';
  };

  const handleChangeExpirationDate = (key: keyof ExpirationDate, value: string) => {
    if (key === 'month' && preventExpirationMonth(value)) return;
    // if (key === 'year' && preventExpirationYear({ ...expirationDate, [key]: value })) return;

    setExpirationDate({ ...expirationDate, [key]: value });
  };

  const handleBlurExpirationDate = (key: keyof ExpirationDate) => {
    setOnBlurExpirationDate({ ...onBlurExpirationDate, [key]: true });
  };

  const isValidateExpirationDate = validateExpirationDate(expirationDate);

  // expirationDate 관련 상태값 -- end

  //cvc
  const validateCvc = (cvc: string) => {
    return cvc.length === 3 && isNumericString(cvc);
  };

  const preventCvc = (cvc: string) => {
    if (!isNumericString(cvc)) return false;
    if (cvc.length > 3) return false;
    return true;
  };

  const renderErrorMessageCvc = (cvc: string) => {
    if (!onBlurCvc) return '';
    if (!validateCvc(cvc)) return 'CVC를 전부 채워주세요';
    return '';
  };

  const handleChangeCvc = (value: string) => {
    if (!preventCvc(value)) return;
    setCvc(value);
  };

  const handleBlurCvc = () => {
    preventCvc(cvc);
    setOnBlurCvc(true);
  };

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
        errorMessage={renderErrorMessageCardNumbers(cardNumbers)}
      >
        {cardNumbers.map((value, index) => (
          <Input
            type="text"
            key={index}
            value={value}
            maxLength={4}
            placeholder="1234"
            isError={onBlurCardNumber.includes(true) && !validateCardNumber(cardNumbers[index])}
            onChange={(e) => handleChangeCardNumber(index, e.target.value)}
            onBlur={() => handleBlurCardNumber(index)}
          />
        ))}
      </FormGroup>
      <FormGroup
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
        label="유효기간"
        errorMessage={renderErrorMessageExpirationDate(expirationDate)}
      >
        <Input
          type="text"
          value={expirationDate.month}
          onChange={(e) => handleChangeExpirationDate('month', e.target.value)}
          onBlur={() => {
            handleBlurExpirationDate('month');
          }}
          isError={Object.values(onBlurExpirationDate).includes(true) && !isValidateExpirationDate.month}
        />
        <Input
          type="text"
          value={expirationDate.year}
          onChange={(e) => handleChangeExpirationDate('year', e.target.value)}
          onBlur={() => {
            handleBlurExpirationDate('year');
          }}
          isError={Object.values(onBlurExpirationDate).includes(true) && !isValidateExpirationDate.year}
        />
      </FormGroup>

      <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={renderErrorMessageCvc(cvc)}>
        <Input
          type="text"
          value={cvc}
          maxLength={3}
          placeholder="123"
          isError={onBlurCvc && !validateCvc(cvc)}
          onChange={(e) => handleChangeCvc(e.target.value)}
          onBlur={() => handleBlurCvc()}
        />
      </FormGroup>
    </>
  );
};
