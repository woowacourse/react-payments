import { useState } from 'react';

import cn from 'classnames';

import { CreditCard } from '@/core/components/creditCard';
import { FormGroup } from '@/core/components/formGroup';
import { Field } from '@/core/components/field';
import { Input } from '@/core/components/input';

import { isNumericString } from '@/core/utils/validator';

import styles from './Payments.module.css';

import { useCvc } from './hooks/useCvc';
import { useExpirationDate } from './hooks/useExpirationDate';

import { validateCardNumber } from './validator';
import { BRAND_NUMBER } from './constant';

export const Payments = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [onBlurCardNumber, setOnBlurCardNumber] = useState([false, false, false, false]);

  const [cardNumbersInvalidAttemp, setCardNumbersInvalidAttemp] = useState([false, false, false, false]);
  // cardNumber --------------------------

  const preventCardNumber = (cardNumber: string) => {
    if (cardNumber !== '' && !isNumericString(cardNumber)) return true;
    if (cardNumber.length > 4) return true;
    return false;
  };

  const renderErrorMessageCardNumbers = (cardNumbers: string[]) => {
    if (cardNumbersInvalidAttemp.find(Boolean)) return '유효현 카드번호(숫자)를 입력해주세요';
    if (onBlurCardNumber.every((blur) => !blur)) return '';
    if (cardNumbers.some((cardNumber) => cardNumber.length !== 4)) return '카드 번호를 전부 채워주세요';
    return '';
  };

  const renderErrorCardNumberInput = (index: number) => {
    const cardNumberInvalidAttempMessage = cardNumbersInvalidAttemp[index];
    if (cardNumberInvalidAttempMessage) return true;

    const cardNumber = cardNumbers[index];
    return onBlurCardNumber.includes(true) && !validateCardNumber(cardNumber);
  };

  const handleChangeCardNumber = (index: number, value: string) => {
    if (preventCardNumber(value)) {
      setCardNumbersInvalidAttemp(
        cardNumbersInvalidAttemp.map((invalidAttemp: boolean, i: number) => {
          return index === i ? true : invalidAttemp;
        }),
      );
      return;
    } else {
      setCardNumbersInvalidAttemp(
        cardNumbersInvalidAttemp.map((invalidAttemp: boolean, i: number) => {
          return index === i ? false : invalidAttemp;
        }),
      );
    }
    const next = [...cardNumbers];
    next[index] = value;
    setCardNumbers(next);
  };

  const handleBlurCardNumber = (index: number) => {
    const next = [...onBlurCardNumber];
    next[index] = true;
    setOnBlurCardNumber(next);
  };

  const renderBrandCard = (cardNumbers: string[]) => {
    if (cardNumbers[0].startsWith(BRAND_NUMBER.visa)) return 'visa';
    if (BRAND_NUMBER.mastercard.some((brandNumber) => cardNumbers[0].startsWith(brandNumber))) return 'mastercard';
    return 'default';
  };

  //--------------------------------

  const {
    value: expirationDate,
    onChange: handleChangeExpirationDate,

    blurValue: onBlurExpirationDate,
    onBlur: handleBlurExpirationDate,

    errors: errorsExpirationDate,

    invalidAttemp: expirationDateInvalidAttemp,
    renderErrorMessage: renderErrorMessageExpirationDate,
  } = useExpirationDate();

  //cvc
  const {
    value: cvc,
    onChange: handleChangeCvc,

    blurValue: onBlurCvc,
    onBlur: handleBlurCvc,

    errors: errorsCvc,

    invalidAttemp: cvcInvalidAttemp,
    renderErrorMessage: renderErrorMessageCvc,
  } = useCvc();

  return (
    <div className={cn(styles.payments)}>
      <CreditCard
        bank="default"
        cardBrand={renderBrandCard(cardNumbers)}
        cardNumberList={cardNumbers}
        expirationDate={[expirationDate.month, expirationDate.year]}
      />
      <FormGroup title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다.">
        <Field label="카드 번호" errorMessage={renderErrorMessageCardNumbers(cardNumbers)}>
          {cardNumbers.map((value, index) => (
            <Input
              type="tel"
              key={index}
              value={value}
              maxLength={4}
              placeholder="1234"
              isError={renderErrorCardNumberInput(index)}
              onChange={(e) => handleChangeCardNumber(index, e.target.value)}
              onBlur={() => handleBlurCardNumber(index)}
            />
          ))}
        </Field>
      </FormGroup>
      <FormGroup title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MMYY)를 순서대로 입력해 주세요">
        <Field label="유효기간" errorMessage={renderErrorMessageExpirationDate(expirationDate)}>
          <Input
            type="tel"
            value={expirationDate.month}
            maxLength={2}
            onChange={(e) => handleChangeExpirationDate('month', e.target.value)}
            onBlur={() => {
              handleBlurExpirationDate('month');
            }}
            isError={
              expirationDateInvalidAttemp.month ||
              (Object.values(onBlurExpirationDate).includes(true) && !errorsExpirationDate.month?.length)
            }
            placeholder="MM"
          />
          <Input
            type="tel"
            value={expirationDate.year}
            maxLength={2}
            onChange={(e) => handleChangeExpirationDate('year', e.target.value)}
            onBlur={() => {
              handleBlurExpirationDate('year');
            }}
            isError={
              expirationDateInvalidAttemp.year ||
              (Object.values(onBlurExpirationDate).includes(true) && !errorsExpirationDate.year?.length)
            }
            placeholder="YY"
          />
        </Field>
      </FormGroup>

      <FormGroup title="CVC 번호를 입력해 주세요">
        <Field label="CVC" errorMessage={renderErrorMessageCvc()}>
          <Input
            type="tel"
            id="cvc"
            value={cvc}
            maxLength={3}
            placeholder="123"
            isError={!!cvcInvalidAttemp || (onBlurCvc && !errorsCvc.cvc.length)}
            onChange={handleChangeCvc}
            onBlur={handleBlurCvc}
          />
        </Field>
      </FormGroup>
    </div>
  );
};
