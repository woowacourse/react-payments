import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import { CARD_NUMBER_ERROR_MESSAGE } from '../../hooks/useCardNumber';

const meta = {
  title: 'FormField_CardNumber',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumberDefault: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    caption: '본인 명의의 카드만 결제 가능합니다.',
    children: (
      <InputField label="카드 번호" error="">
        <>
          <Input placeholder="1234" value="" maxLength={4} />
          <Input placeholder="1234" value="" maxLength={4} />
          <Input placeholder="1234" value="" maxLength={4} />
          <Input placeholder="1234" value="" maxLength={4} />
        </>
      </InputField>
    ),
  },
};

export const CardNumberValid: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    caption: '본인 명의의 카드만 결제 가능합니다.',
    children: (
      <InputField label="카드 번호" error="">
        <>
          <Input placeholder="1234" value="1234" maxLength={4} />
          <Input placeholder="1234" value="5678" maxLength={4} />
          <Input placeholder="1234" value="1234" maxLength={4} />
          <Input placeholder="1234" value="5678" maxLength={4} />
        </>
      </InputField>
    ),
  },
};

export const CardNumberTypeError: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    caption: '본인 명의의 카드만 결제 가능합니다.',
    children: (
      <InputField label="카드 번호" error={CARD_NUMBER_ERROR_MESSAGE}>
        <>
          <Input placeholder="1234" value="simo" maxLength={4} invalid />
          <Input placeholder="1234" value="123d" maxLength={4} invalid />
          <Input placeholder="1234" value="123!" maxLength={4} invalid />
          <Input placeholder="1234" value="5678" maxLength={4} />
        </>
      </InputField>
    ),
  },
};

export const CardNumberLengthError: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    caption: '본인 명의의 카드만 결제 가능합니다.',
    children: (
      <InputField label="카드 번호" error={CARD_NUMBER_ERROR_MESSAGE}>
        <>
          <Input placeholder="1234" value="123" maxLength={4} invalid />
          <Input placeholder="1234" value="12" maxLength={4} invalid />
          <Input placeholder="1234" value="1" maxLength={4} invalid />
          <Input placeholder="1234" value="5678" maxLength={4} />
        </>
      </InputField>
    ),
  },
};
