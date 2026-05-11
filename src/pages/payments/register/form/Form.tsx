import { useState, useEffect } from 'react';

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

    cardNubmersIsValid,

    cardNubmersRefs,
    cardNubmersRef,

    renderErrorMessageCardNumbers,
    renderErrorCardNumberInput,

    // card
    card,
    handleChangeCard,

    cardRefs,
    cardRef,

    cardValids,
    cardIsValid,

    handleBlurCard,

    renderErrorMessageCard,

    // expirationDate
    expirationDate,
    handleChangeExpirationDate,

    onBlurExpirationDate,
    handleBlurExpirationDate,

    errorsExpirationDate,
    expirationDateValids,
    expirationDateIsValid,

    expirationDateRefs,
    expirationDateRef,

    expirationDateInvalidAttemp,
    renderErrorMessageExpirationDate,

    // cvc
    cvc,
    handleChangeCvc,

    onBlurCvc,
    handleBlurCvc,

    cvcRefs,
    cvcRef,

    errorsCvc,
    cvcIsValid,

    cvcInvalidAttemp,
    renderErrorMessageCvc,

    // password
    password,
    handleChangePassword,

    onBlurPassword,
    handleBlurPassword,

    passwordRefs,
    passwordRef,

    errorsPassword,
    passwordIsValid,

    passwordInvalidAttemp,
    renderErrorMessagePassword,

    // creditCard
    renderBrandCard,

    handleSubmit,
  } = outletContext;

  useEffect(() => {
    if (cardNubmersIsValid && !cardIsValid) return cardRefs.current?.card?.focus();
    if (cardIsValid && !expirationDateValids.month) return expirationDateRefs.current.month?.focus();
    if (expirationDateValids.year && !cvcIsValid) return cvcRefs.current?.cvc?.focus();
    if (cvcIsValid && !passwordIsValid) return passwordRefs.current?.password?.focus();
  }, [
    cardNubmersIsValid,

    cardRefs,
    cardIsValid,

    expirationDateRefs,
    expirationDateValids,

    cvcRefs,
    cvcIsValid,

    passwordRefs,
    passwordIsValid,
  ]);

  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (cardNubmersIsValid) setStep(1);
    if (cardIsValid) setStep(2);
    if (expirationDateIsValid) setStep(3);
    if (cvcIsValid) setStep(4);
  }, [cardNubmersIsValid, cardIsValid, expirationDateIsValid, cvcIsValid, passwordIsValid]);

  const isValid = cardNubmersIsValid && cardIsValid && expirationDateIsValid && cvcIsValid && passwordIsValid;

  return (
    <div className={cn(styles.payments)}>
      <CreditCard
        bank="default"
        cardBrand={renderBrandCard(Object.values(cardNumbers))}
        cardNumberList={Object.values(cardNumbers)}
        expirationDate={[expirationDate.month, expirationDate.year]}
      />
      {step >= 0 && (
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
      )}
      {step >= 1 && (
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
      )}
      {step >= 2 && (
        <FormGroup title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MMYY)를 순서대로 입력해 주세요">
          <Field label="유효기간" errorMessage={renderErrorMessageExpirationDate()}>
            <Input
              ref={expirationDateRef}
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
              ref={expirationDateRef}
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
      )}
      {step >= 3 && (
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
      )}
      {step >= 4 && (
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
      )}
      {isValid && (
        <Button variant="primary" edge="flat" onClick={handleSubmit}>
          확인
        </Button>
      )}
    </div>
  );
};
