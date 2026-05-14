import { useState, useRef, useEffect } from 'react';

import { useOutletContext } from 'react-router';

import cn from 'classnames';

import { FullScreen } from '@/core/components/fullScreen';
import { CreditCard } from '@/core/components/creditCard';
import { FormGroup } from '@/core/components/formGroup';
import { Field } from '@/core/components/field';
import { Input } from '@/core/components/input';
import { Select } from '@/core/components/select';
import { Button } from '@/core/components/button';

import { BRAND_NUMBER, CARD_OPTIONS } from './constant';

import styles from './Form.module.css';

export const Form = () => {
  const outletContext = useOutletContext<any>();
  if (!outletContext) return null;

  const {
    cardNumbers,
    card,
    expirationDate,
    cvc,
    password,
    brandCard,

    handleSubmit,
  } = outletContext;

  const prevFormValidsRefs = useRef<Record<string, boolean>>({});
  useEffect(() => {
    function focusCardIfCardNumberCompleted() {
      if (cardNumbers.isValid && !card.isValid && card.refs.current?.card) {
        if (prevFormValidsRefs.current.card) return;
        prevFormValidsRefs.current.card = true;
        card.refs.current?.card.focus();
        return true;
      }
    }
    function focusMonthIfCardSelected() {
      if (card.isValid && !expirationDate.valids.month) {
        if (prevFormValidsRefs.current.month) return;
        prevFormValidsRefs.current.month = true;
        expirationDate.refs.current.month?.focus();
        return true;
      }
    }
    function focusCvcIfExpirationDateCompleted() {
      if (expirationDate.valids.year && !cvc.isValid) {
        if (prevFormValidsRefs.current.cvc) return;
        prevFormValidsRefs.current.cvc = true;
        cvc.refs.current?.cvc?.focus();
        return true;
      }
    }
    function focusPasswordIfCvcCompleted() {
      if (cvc.isValid && !password.isValid) {
        if (prevFormValidsRefs.current.password) return;
        prevFormValidsRefs.current.password = true;
        password.refs.current?.password?.focus();
        return true;
      }
    }

    if (focusCardIfCardNumberCompleted()) return;
    if (focusMonthIfCardSelected()) return;
    if (focusCvcIfExpirationDateCompleted()) return;
    if (focusPasswordIfCvcCompleted()) return;
  }, [
    cardNumbers.isValid,

    card.refs,
    card.isValid,

    expirationDate.refs,
    expirationDate.valids,

    cvc.refs,
    cvc.isValid,

    password.refs,
    password.isValid,
  ]);

  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (cardNumbers.isValid) setStep(1);
    if (card.isValid) setStep(2);
    if (expirationDate.isValid) setStep(3);
    if (cvc.isValid) setStep(4);
  }, [cardNumbers.isValid, card.isValid, expirationDate.isValid, cvc.isValid, password.isValid]);

  const branchNumberCard = BRAND_NUMBER?.[brandCard as keyof typeof BRAND_NUMBER];

  const isValid = cardNumbers.isValid && card.isValid && expirationDate.isValid && cvc.isValid && password.isValid;

  return (
    <div className={cn(styles.payments)}>
      <FullScreen>
        <FullScreen.Content>
          <CreditCard
            bank="default"
            card={card.values.card}
            cardBrand={brandCard}
            cardNumberList={Object.values(cardNumbers.values)}
            expirationDate={[expirationDate.values.month, expirationDate.values.year]}
          />

          <FormGroup title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해주세요" hide={!(step >= 4)}>
            <Field label="비밀번호 앞 2자리" errorMessage={password.renderErrorMessage()}>
              <Input
                {...{ ref: password.ref }}
                type="password"
                id="password"
                value={password.values.password}
                maxLength={2}
                isError={
                  !!password.invalidAttemp.password || (password.blur.password && !password.errors.password.length)
                }
                onChange={password.onChange}
                onBlur={password.onBlur}
              />
            </Field>
          </FormGroup>
          <FormGroup title="CVC 번호를 입력해 주세요" hide={!(step >= 3)}>
            <Field label="CVC" errorMessage={cvc.renderErrorMessage()}>
              <Input
                {...{ ref: cvc.ref }}
                type="tel"
                id="cvc"
                value={cvc.values.cvc}
                maxLength={3}
                placeholder="123"
                isError={!!cvc.invalidAttemp.cvc || (cvc.blur.cvc && !cvc.errors.cvc.length)}
                onChange={cvc.onChange}
                onBlur={cvc.onBlur}
              />
            </Field>
          </FormGroup>
          <FormGroup
            title="카드 유효기간을 입력해 주세요"
            subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
            hide={!(step >= 2)}
          >
            <Field label="유효기간" errorMessage={expirationDate.renderErrorMessage()}>
              <Input
                {...{ ref: expirationDate.ref }}
                type="tel"
                id="month"
                value={expirationDate.values.month}
                maxLength={2}
                onChange={expirationDate.onChange}
                onBlur={expirationDate.onBlur}
                isError={
                  expirationDate.invalidAttemp.month ||
                  (Object.values(expirationDate.blur).includes(true) && !expirationDate.errors.month?.length)
                }
                placeholder="MM"
              />
              <Input
                {...{ ref: expirationDate.ref }}
                type="tel"
                id="year"
                value={expirationDate.values.year}
                maxLength={2}
                onChange={expirationDate.onChange}
                onBlur={expirationDate.onBlur}
                isError={
                  expirationDate.invalidAttemp.year ||
                  (Object.values(expirationDate.blur).includes(true) && !expirationDate.errors.year?.length)
                }
                placeholder="YY"
              />
            </Field>
          </FormGroup>
          <FormGroup title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다." hide={!(step >= 1)}>
            <Field errorMessage={card.renderErrorMessage()}>
              <Select
                {...{ ref: card.ref }}
                id="card"
                value={card.values.card}
                onChange={card.onChange}
                options={CARD_OPTIONS}
                onBlur={card.onBlur}
              />
            </Field>
          </FormGroup>
          <FormGroup
            title="결제할 카드 번호를 입력해 주세요"
            subTitle="본인 명의의 카드만 결제 가능합니다."
            hide={!(step >= 0)}
          >
            <Field
              label="카드 번호"
              errorMessage={cardNumbers.renderErrorMessage()}
              style={{ justifyContent: 'flex-start' }}
            >
              {Object.values(cardNumbers.values).map((value, index, array) => (
                <Input
                  ref={cardNumbers.ref}
                  type="tel"
                  id={String(index)}
                  key={index}
                  value={value as string}
                  maxLength={array.length - 1 !== index ? 4 : (branchNumberCard?.length || 16) % 4 || 4}
                  style={{
                    flex: '0 0 auto',
                    flexWrap: 'wrap',
                    width: `calc(${((array.length - 1 !== index ? 4 : (branchNumberCard?.length || 16) % 4 || 4) * 25) / 4}% - 10px)`,
                  }}
                  placeholder="1234"
                  isError={cardNumbers.renderErrorInput(String(index))}
                  onChange={cardNumbers.onChange}
                  onBlur={cardNumbers.onBlur}
                />
              ))}
            </Field>
          </FormGroup>
        </FullScreen.Content>
        <FullScreen.Action>
          {isValid && (
            <Button variant="primary" edge="flat" block onClick={handleSubmit}>
              확인
            </Button>
          )}
        </FullScreen.Action>
      </FullScreen>
    </div>
  );
};
