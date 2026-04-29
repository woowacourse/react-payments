import { useState } from 'react';
import { CreditCard } from '../../core/components/creditCard';
import { FormGroup } from '../../core/components/formGroup';
import { Input } from '../../core/components/input';

import { useCVC } from './useCVC';

export const Payments = () => {
  const [cardNumber, setCardNumber] = useState({
    '0': '',
    '1': '',
    '2': '',
    '3': '',
  });

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const cvcForm = useCVC();

  return (
    <>
      <CreditCard bank="default" cardBrand="mastercard" cardNumberList={[]} expirationDate={[]} />
      <FormGroup
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
        label="카드 번호"
        errorMessage="errorMessage"
      >
        {Object.keys(cardNumber).map((key) => {
          return (
            <Input
              value={cardNumber[key as keyof typeof cardNumber]}
              onChange={(e) => setCardNumber({ ...cardNumber, [key]: e.target.value })}
            />
          );
        })}
      </FormGroup>
      <FormGroup
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요"
        label="유효기간"
        errorMessage="errorMessage"
      >
        <Input value={year} onChange={(e) => setYear(e.target.value)} />
        <Input value={month} onChange={(e) => setMonth(e.target.value)} />
      </FormGroup>

      <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={cvcForm.valid ? '' : 'cvc 오류'}>
        <Input {...cvcForm.state.cvc} />
      </FormGroup>
    </>
  );
};
