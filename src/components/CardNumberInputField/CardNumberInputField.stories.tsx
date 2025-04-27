import { CardNumberInputField } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from '@/hooks';
import { CardNumberInputType } from '@/types/input';

const meta = {
  title: 'Components/CardNumberInputField',
  component: CardNumberInputField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '신용카드 번호를 입력받는 컴포넌트입니다. 4자리씩 4개의 입력 필드로 구성되어 있으며, 숫자만 입력 가능합니다.',
      },
    },
  },
} satisfies Meta<typeof CardNumberInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardNumberWrapper = ({ errors = { first: '', second: '', third: '', fourth: '' } }) => {
  const { register, errors: formErrors } = useForm<CardNumberInputType>({
    defaultValues: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
  });

  return <CardNumberInputField register={register} cardNumberErrors={errors || formErrors} />;
};

export const Default: Story = {
  args: {
    cardNumberErrors: { first: '', second: '', third: '', fourth: '' },
    register: () => ({
      value: '',
      onChange: () => {},
    }),
  },
  render: () => <CardNumberWrapper />,
};

export const WithErrors: Story = {
  args: {
    cardNumberErrors: {
      first: '카드 번호는 4자리의 숫자로 입력해주세요.',
      second: '',
      third: '',
      fourth: '',
    },
    register: () => ({
      value: '',
      onChange: () => {},
    }),
  },
  render: () => (
    <CardNumberWrapper
      errors={{
        first: '카드 번호는 4자리의 숫자로 입력해주세요.',
        second: '',
        third: '',
        fourth: '',
      }}
    />
  ),
};

export const Filled: Story = {
  args: {
    cardNumberErrors: { first: '', second: '', third: '', fourth: '' },
    register: (key: keyof CardNumberInputType) => ({
      value: key === 'first' ? '1234' : key === 'second' ? '5678' : key === 'third' ? '9012' : '3456',
      onChange: () => {},
    }),
  },
  render: () => {
    const { register } = useForm<CardNumberInputType>({
      defaultValues: {
        first: '1234',
        second: '5678',
        third: '9012',
        fourth: '3456',
      },
    });

    return (
      <CardNumberInputField register={register} cardNumberErrors={{ first: '', second: '', third: '', fourth: '' }} />
    );
  },
};
