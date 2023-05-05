import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { ThemeProvider } from 'styled-components';
import { BankCode } from '../Card/types';
import { PaymentsButton } from './PaymentsButton';

const meta = {
  tags: ['autodocs'],
  title: 'PaymentsButton',
  component: PaymentsButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof PaymentsButton>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  return (
    <>
      <PaymentsButton disabled>disabled</PaymentsButton>
      <PaymentsButton>다음</PaymentsButton>
      <PaymentsButton>확인</PaymentsButton>
    </>
  );
};

export const BCCardButton: Story = () => {
  return (
    <>
      <PaymentsButton disabled bankCode={BankCode.KakaoBank}>
        다음
      </PaymentsButton>
      <PaymentsButton disabled={false} bankCode={BankCode.BCCard}>
        다음
      </PaymentsButton>
      <PaymentsButton disabled={false} bankCode={BankCode.BCCard}>
        확인
      </PaymentsButton>
    </>
  );
};

export const KaKaoBankButton: Story = () => {
  return (
    <>
      <PaymentsButton disabled bankCode={BankCode.KakaoBank}>
        다음
      </PaymentsButton>
      <PaymentsButton disabled={false} bankCode={BankCode.KakaoBank}>
        다음
      </PaymentsButton>
      <PaymentsButton disabled={false} bankCode={BankCode.KakaoBank}>
        확인
      </PaymentsButton>
    </>
  );
};
