import { useNavigate } from 'react-router-dom';

import { Flex } from '@/components/common/Flex';
import { BrandForm } from '@/components/features/CardFormFiled/BrandForm';
import { CardNumberForm } from '@/components/features/CardFormFiled/CardNumberForm';
import { CVCForm } from '@/components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from '@/components/features/CardFormFiled/ExpireDateForm';
import { PassWordForm } from '@/components/features/CardFormFiled/PassWordForm';
import { CardFormLayout } from '@/components/features/CardFormLayout';
import { CardPreview } from '@/components/features/CardPreview';
import { STEPS, StepType } from '@/constants/stackStep';
import { CardFormProvider } from '@/context/cardFormContext';
import { useCardForm } from '@/hooks/useCardForm';
import { useStack } from '@/hooks/useStack';

export const CardForm = () => {
  const navigate = useNavigate();
  const { Stack, setStep } = useStack<StepType>(STEPS.CARD_NUMBER);
  const { formData } = useCardForm();

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
    <CardFormProvider>
      <Flex>
        <CardPreview />
      </Flex>

      <CardFormLayout disabled={!allValid} onSubmit={handleCardFormSubmit}>
        <Stack>
          <Stack.Step name="카드번호">
            <CardNumberForm onNext={() => setStep('카드사')} />
          </Stack.Step>
          <Stack.Step name="카드사">
            <BrandForm onNext={() => setStep('유효기간')} />
          </Stack.Step>
          <Stack.Step name="유효기간">
            <ExpireDateForm onNext={() => setStep('CVC')} />
          </Stack.Step>
          <Stack.Step name="CVC">
            <CVCForm onNext={() => setStep('비밀번호')} />
          </Stack.Step>
          <Stack.Step name="비밀번호">
            <PassWordForm onNext={() => setStep('비밀번호')} />
          </Stack.Step>
        </Stack>
      </CardFormLayout>
    </CardFormProvider>
  );
};
