import { useRef, useEffect } from 'react';

import { useOutletContext } from 'react-router';

import cn from 'classnames';

import { CreditCard } from '@/core/components/creditCard';
import { FormGroup } from '@/core/components/formGroup';
import { Field } from '@/core/components/field';
import { Input } from '@/core/components/input';
import { Select } from '@/core/components/select';
import { Button } from '@/core/components/button';

import { CARD_OPTIONS } from './constant';

import styles from './Form.module.css';

export const Form = () => {
  const outletContext = useOutletContext<any>();
  if (!outletContext) return null;

  const {
    // cardNumbers
    cardNumbers,
    handleChangeCardNumbers,

    handleBlurCardNumbers,

    errorsCardNumbers,

    cardNubmersRef,

    renderErrorMessageCardNumbers,
    renderErrorCardNumberInput,

    // card
    card,
    handleChangeCard,

    errorsCard,

    handleBlurCard,

    renderErrorMessageCard,

    // expirationDate
    expirationDate,
    handleChangeExpirationDate,

    onBlurExpirationDate,
    handleBlurExpirationDate,

    errorsExpirationDate,

    expirationDateInvalidAttemp,
    renderErrorMessageExpirationDate,

    // cvc
    cvc,
    handleChangeCvc,

    onBlurCvc,
    handleBlurCvc,

    errorsCvc,

    cvcInvalidAttemp,
    renderErrorMessageCvc,

    // password
    password,
    handleChangePassword,

    onBlurPassword,
    handleBlurPassword,

    errorsPassword,

    passwordInvalidAttemp,
    renderErrorMessagePassword,

    // creditCard
    renderBrandCard,

    handleSubmit,
  } = outletContext;

  const cardRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const cvcRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const isValidCardNumbers3 = errorsCardNumbers?.[3]?.every((error) => error.valid);

  const isValidCard = errorsCard?.card.every((error) => error.valid);

  const isValidExpirationMonth = errorsExpirationDate?.month.every((error) => error.valid);
  const isValidExpirationYear = errorsExpirationDate?.year.every((error) => error.valid);

  const isValidCvc = errorsCvc?.cvc.every((error) => error.valid);

  const isValidPassword = errorsPassword?.password.every((error) => error.valid);

  useEffect(() => {
    if (isValidCardNumbers3 && !isValidCard) return cardRef.current?.focus();
    if (isValidCard && !isValidExpirationMonth) return monthRef.current?.focus();
    if (isValidExpirationYear && !isValidCvc) return cvcRef.current?.focus();
    if (isValidCvc && !isValidPassword) return passwordRef.current?.focus();
  }, [
    cardNumbersRefs,
    isValidCardNumbers3,
    isValidCard,
    isValidExpirationMonth,
    isValidExpirationYear,
    isValidCvc,
    isValidPassword,
  ]);

  return (
    <div className={cn(styles.payments)}>
      <CreditCard
        bank="default"
        cardBrand={renderBrandCard(Object.values(cardNumbers))}
        cardNumberList={Object.values(cardNumbers)}
        expirationDate={[expirationDate.month, expirationDate.year]}
      />
      <FormGroup title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다.">
        <Field label="카드 번호" errorMessage={renderErrorMessageCardNumbers()}>
          {Object.values(cardNumbers).map((value, index) => (
            <Input
              ref={cardNubmersRef}
              type="tel"
              id={String(index)}
              key={index}
              value={value}
              maxLength={4}
              placeholder="1234"
              isError={renderErrorCardNumberInput(String(index))}
              onChange={handleChangeCardNumbers}
              onBlur={handleBlurCardNumbers}
            />
          ))}
        </Field>
      </FormGroup>
      <FormGroup title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다.">
        <Field errorMessage={renderErrorMessageCard()}>
          <Select
            ref={cardRef}
            id="card"
            value={card}
            onChange={handleChangeCard}
            options={CARD_OPTIONS}
            onBlur={handleBlurCard}
          />
        </Field>
      </FormGroup>
      <FormGroup title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MMYY)를 순서대로 입력해 주세요">
        <Field label="유효기간" errorMessage={renderErrorMessageExpirationDate()}>
          <Input
            ref={monthRef}
            type="tel"
            id="month"
            value={expirationDate.month}
            maxLength={2}
            onChange={handleChangeExpirationDate}
            onBlur={handleBlurExpirationDate}
            isError={
              expirationDateInvalidAttemp.month ||
              (Object.values(onBlurExpirationDate).includes(true) && !errorsExpirationDate.month?.length)
            }
            placeholder="MM"
          />
          <Input
            ref={yearRef}
            type="tel"
            id="year"
            value={expirationDate.year}
            maxLength={2}
            onChange={handleChangeExpirationDate}
            onBlur={handleBlurExpirationDate}
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
            ref={cvcRef}
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

      <FormGroup title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해주세요">
        <Field label="비밀번호 앞 2자리" errorMessage={renderErrorMessagePassword()}>
          <Input
            ref={passwordRef}
            type="password"
            id="password"
            value={password}
            maxLength={2}
            isError={!!passwordInvalidAttemp || (onBlurPassword && !errorsPassword.password.length)}
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
          />
        </Field>
      </FormGroup>
      <Button variant="primary" edge="flat" onClick={handleSubmit}>
        확인
      </Button>
    </div>
  );
};
