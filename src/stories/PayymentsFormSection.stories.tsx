import type { Meta, StoryObj } from '@storybook/react';
import PaymentsFormSection from '../components/PaymentsFormSection';

const meta = {
  title: 'PaymentsFormSection',
  component: PaymentsFormSection,
} satisfies Meta<typeof PaymentsFormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    formTitleProps: {
      title: '결제할 카드 번호를 입력해 주세요',
      subTitle: '본인 명의의 카드만 결제 가능합니다.',
    },
    inputFormProps: {
      label: '카드 번호',
      hasError: false,
      errorMessage: 'ddd',
      inputFieldProps: [
        {
          placeholder: '1234',
          maxLength: 4,
          hasError: true,
        },
        {
          placeholder: '1234',
          maxLength: 4,
          hasError: false,
        },
        {
          placeholder: '1234',
          maxLength: 4,
          hasError: false,
        },
        {
          placeholder: '1234',
          maxLength: 4,
          hasError: false,
        },
      ],
    },
  },
};

export const ExpirationDate: Story = {
  args: {
    formTitleProps: {
      title: '카드 유효기간을 입력해 주세요',
      subTitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    },
    inputFormProps: {
      label: '유효기간',
      hasError: false,
      errorMessage: '',
      inputFieldProps: [
        {
          placeholder: 'MM',
          maxLength: 2,
          hasError: false,
        },
        {
          placeholder: 'YY',
          maxLength: 2,
          hasError: false,
        },
      ],
    },
  },
};

export const Name: Story = {
  args: {
    formTitleProps: {
      title: '카드 소유자 이름을 입력해 주세요.',
    },
    inputFormProps: {
      label: '소유자 이름',
      hasError: false,
      errorMessage: '',
      inputFieldProps: [
        {
          placeholder: 'FAMILY / GIVEN',
          maxLength: 50,
          hasError: false,
        },
      ],
    },
  },
};
