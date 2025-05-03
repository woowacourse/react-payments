import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';
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
  },
  argTypes: {
    onNext: {
      control: false,
    },
  },
  render: () => {
    const { Stack, setStep } = useStack<StepType>(STEPS.CARD_NUMBER);

    return (
      <CardFormProvider>
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
        </Flex>
      </CardFormProvider>
    );
  },
};

export const CardNumberFormStory = () => {
  return <CardNumberForm onNext={() => {}} />;
};

export const BrandFormStory = () => {
  return (
    <Flex direction="column" height="300px" justifyContent="flex-start" alignItems="flex-start">
      <BrandForm onNext={() => {}} />
    </Flex>
  );
};

export const ExpireDateFormStory = () => {
  return <ExpireDateForm onNext={() => {}} />;
};

export const CVCFormStory = () => {
  return <CVCForm onNext={() => {}} />;
};

export const PassWordFormStory = () => {
  return <PassWordForm onNext={() => {}} />;
};
