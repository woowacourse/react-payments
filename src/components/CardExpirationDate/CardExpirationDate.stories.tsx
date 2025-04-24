import type { Meta, StoryObj } from '@storybook/react';
import { CardExpirationDate } from '@/components';
import useForm from '@/hooks/useForm';
import { CardExpirationDateInputType } from '@/types/input';

const meta = {
  title: 'Components/CardExpirationDate',
  component: CardExpirationDate,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '카드 유효기간을 입력받는 컴포넌트입니다. 월(MM)과 년도(YY)를 입력받으며, 숫자만 입력 가능합니다.',
      },
    },
  },
} satisfies Meta<typeof CardExpirationDate>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardExpirationDateWrapper = ({ errors = { month: '', year: '' } }) => {
  const { register, errors: formErrors } = useForm<CardExpirationDateInputType>({
    defaultValues: {
      month: '',
      year: '',
    },
  });

  return <CardExpirationDate register={register} cardExpirationDateErrors={errors || formErrors} />;
};

export const Default: Story = {
  args: {
    cardExpirationDateErrors: { month: '', year: '' },
    register: () => ({
      value: '',
      onChange: () => {},
    }),
  },
  render: () => <CardExpirationDateWrapper />,
};

export const WithErrors: Story = {
  args: {
    cardExpirationDateErrors: {
      month: '유효한 월(01-12)을 입력해주세요.',
      year: '',
    },
    register: () => ({
      value: '',
      onChange: () => {},
    }),
  },
  render: () => (
    <CardExpirationDateWrapper
      errors={{
        month: '유효한 월(01-12)을 입력해주세요.',
        year: '',
      }}
    />
  ),
};

export const Filled: Story = {
  args: {
    cardExpirationDateErrors: { month: '', year: '' },
    register: (key: keyof CardExpirationDateInputType) => ({
      value: key === 'month' ? '12' : '25',
      onChange: () => {},
    }),
  },
  render: () => {
    const { register } = useForm<CardExpirationDateInputType>({
      defaultValues: {
        month: '12',
        year: '25',
      },
    });

    return <CardExpirationDate register={register} cardExpirationDateErrors={{ month: '', year: '' }} />;
  },
};
