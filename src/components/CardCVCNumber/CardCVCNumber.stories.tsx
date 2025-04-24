import type { Meta, StoryObj } from '@storybook/react';
import { CardCVCNumber } from '@/components';
import { useForm } from '@/hooks';
import { CardCVCNumberInputType } from '@/types/input';

const meta = {
  title: 'Components/CardCVCNumber',
  component: CardCVCNumber,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '카드 CVC 번호를 입력받는 컴포넌트입니다. 3자리 숫자만 입력 가능합니다.',
      },
    },
  },
} satisfies Meta<typeof CardCVCNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardCVCNumberWrapper = ({ errors = { cvc: '' } }) => {
  const { register, errors: formErrors } = useForm<CardCVCNumberInputType>({
    defaultValues: {
      cvc: '',
    },
  });

  return (
    <CardCVCNumber
      register={register}
      cardCVCNumberErrors={errors || formErrors}
      onFocus={() => {}}
      onBlur={() => {}}
    />
  );
};

export const Default: Story = {
  args: {
    cardCVCNumberErrors: { cvc: '' },
    register: () => ({
      value: '',
      onChange: () => {},
    }),
    onFocus: () => {},
    onBlur: () => {},
  },
  render: () => <CardCVCNumberWrapper />,
};

export const WithErrors: Story = {
  args: {
    cardCVCNumberErrors: { cvc: 'CVC 번호는 3자리 숫자여야 합니다.' },
    register: () => ({
      value: '',
      onChange: () => {},
    }),
    onFocus: () => {},
    onBlur: () => {},
  },
  render: () => (
    <CardCVCNumberWrapper
      errors={{
        cvc: 'CVC 번호는 3자리 숫자여야 합니다.',
      }}
    />
  ),
};

export const Filled: Story = {
  args: {
    cardCVCNumberErrors: { cvc: '' },
    register: () => ({
      value: '123',
      onChange: () => {},
    }),
    onFocus: () => {},
    onBlur: () => {},
  },
  render: () => {
    const { register } = useForm<CardCVCNumberInputType>({
      defaultValues: {
        cvc: '123',
      },
    });

    return <CardCVCNumber register={register} cardCVCNumberErrors={{ cvc: '' }} onFocus={() => {}} onBlur={() => {}} />;
  },
};
