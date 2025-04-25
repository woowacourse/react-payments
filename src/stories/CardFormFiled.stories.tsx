import { useState } from 'react';

import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@/components/common/Flex';
import { BrandForm } from '@/components/features/CardFormFiled/BrandForm';
import { CardNumberForm } from '@/components/features/CardFormFiled/CardNumberForm';
import { CVCForm } from '@/components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from '@/components/features/CardFormFiled/ExpireDateForm';
import { PassWordForm } from '@/components/features/CardFormFiled/PassWordForm';
import { STEPS, StepType } from '@/constants/stackStep';
import { useCardFormState } from '@/hooks/useCardFormState';
import { useStack } from '@/hooks/useStack';

const meta = {
  title: 'features/CardFormFiled',
  component: CardNumberForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '카드 번호, 유효기간, CVC 입력을 위한 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof CardNumberForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onNext: () => {},
    context: {
      state: [],
      setState: () => {},
    },
  },
  argTypes: {
    onNext: {
      control: false,
    },
    context: {
      control: false,
    },
  },
  render: () => {
    const { Stack, setStep } = useStack<StepType>(STEPS.CARD_NUMBER);
    const [formData, dispatch] = useCardFormState();
    return (
      <Flex
        justifyContent="flex-start"
        direction="column"
        flex={3}
        gap="10px"
        margin="0px 25px 5px 25px"
        padding="0 15px"
        css={css`
          max-height: 500px;
          overflow-y: auto;
        `}
      >
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
      </Flex>
    );
  },
};

export const CardNumberFormStory = () => {
  const [cardNumbers, setCardNumbers] = useState(
    Array.from({ length: 4 }, () => ({ value: '', isValid: true }))
  );
  return (
    <CardNumberForm
      context={{
        state: cardNumbers,
        setState: setCardNumbers,
      }}
      onNext={() => {}}
    />
  );
};

export const BrandFormStory = () => {
  return (
    <Flex direction="column" height="300px" justifyContent="flex-start" alignItems="flex-start">
      <BrandForm context={{ state: 'BC카드', setState: () => {} }} onNext={() => {}} />
    </Flex>
  );
};

export const ExpireDateFormStory = () => {
  const [expireDate, setExpireDate] = useState(
    Array.from({ length: 2 }, () => ({ value: '', isValid: true }))
  );
  return (
    <ExpireDateForm
      context={{
        state: expireDate,
        setState: setExpireDate,
      }}
      onNext={() => {}}
    />
  );
};

export const CVCFormStory = () => {
  const [cvc, setCvc] = useState({ value: '', isValid: true });
  return <CVCForm context={{ state: cvc, setState: setCvc }} onNext={() => {}} />;
};

export const PassWordFormStory = () => {
  const [passWord, setPassWord] = useState({ value: '', isValid: true });
  return <PassWordForm context={{ state: passWord, setState: setPassWord }} onNext={() => {}} />;
};
