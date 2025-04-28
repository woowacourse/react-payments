import { useNavigate } from 'react-router-dom';

import { useCardFormState } from '../hooks/useCardFormState';
import { Flex } from '@/components/common/Flex';
import { BrandForm } from '@/components/features/CardFormFiled/BrandForm';
import { CardNumberForm } from '@/components/features/CardFormFiled/CardNumberForm';
import { CVCForm } from '@/components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from '@/components/features/CardFormFiled/ExpireDateForm';
import { PassWordForm } from '@/components/features/CardFormFiled/PassWordForm';
import { CardFormLayout } from '@/components/features/CardFormLayout'; // Adjust the path as necessary
import { CardPreview } from '@/components/features/CardPreview';
import { STEPS, StepType } from '@/constants/stackStep';
import { useStack } from '@/hooks/useStack';

export const CardForm = () => {
  const navigate = useNavigate();
  const { Stack, setStep } = useStack<StepType>(STEPS.CARD_NUMBER);
  const [formData, dispatch] = useCardFormState();

  const isFilledAndValid = (item: { value: string; isValid: boolean }) =>
    item.value !== '' && item.isValid;

  const allValid =
    formData.cardNumber.every(isFilledAndValid) &&
    formData.expireDate.every(isFilledAndValid) &&
    isFilledAndValid(formData.cvc) &&
    isFilledAndValid(formData.password) &&
    formData.brand !== null;

  const handleCardFormSubmit = () => {
    if (!allValid) return;

    navigate('/card/confirm', {
      state: {
        cardNumber: formData.cardNumber[0],
        brand: formData.brand,
      },
    });
  };

  return (
    <>
      <Flex>
        <CardPreview
          cardNumbers={formData.cardNumber}
          cardBrand={formData.brand}
          expireDate={formData.expireDate}
        />
      </Flex>

      <CardFormLayout disabled={!allValid} onSubmit={handleCardFormSubmit}>
        <Stack>
          <Stack.Step name="카드번호">
            <CardNumberForm
              context={{
                state: formData.cardNumber,
                setState: (cardNumber) =>
                  dispatch({ type: 'CARD_NUMBER', payload: { ...formData, cardNumber } }),
              }}
              onNext={() => setStep('카드사')}
            />
          </Stack.Step>
          <Stack.Step name="카드사">
            <BrandForm
              context={{
                state: formData.brand,
                setState: (brand) => dispatch({ type: 'BRAND', payload: { ...formData, brand } }),
              }}
              onNext={() => setStep('유효기간')}
            />
          </Stack.Step>
          <Stack.Step name="유효기간">
            <ExpireDateForm
              context={{
                state: formData.expireDate,
                setState: (expireDate) =>
                  dispatch({ type: 'EXPIRE_DATE', payload: { ...formData, expireDate } }),
              }}
              onNext={() => setStep('CVC')}
            />
          </Stack.Step>
          <Stack.Step name="CVC">
            <CVCForm
              context={{
                state: formData.cvc,
                setState: (cvc) => dispatch({ type: 'CVC', payload: { ...formData, cvc } }),
              }}
              onNext={() => setStep('비밀번호')}
            />
          </Stack.Step>
          <Stack.Step name="비밀번호">
            <PassWordForm
              context={{
                state: formData.password,
                setState: (password) =>
                  dispatch({ type: 'PASSWORD', payload: { ...formData, password } }),
              }}
              onNext={() => setStep('비밀번호')}
            />
          </Stack.Step>
        </Stack>
      </CardFormLayout>
    </>
  );
};
