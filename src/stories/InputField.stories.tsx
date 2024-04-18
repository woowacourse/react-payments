import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../components/InputField';
import InputType from '../constants/inputType';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    inputTypes: {
      options: ['CARD_NUMBER', 'EXPIRY_DATE', 'USER_NAME'],
      mapping: {
        CARD_NUMBER: InputType.CARD_NUMBER,
        EXPIRY_DATE: InputType.EXPIRY_DATE,
        USER_NAME: InputType.USER_NAME,
      },
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockCardInfo = {
  cardNumber1: '5123',
  cardNumber2: '1234',
  cardNumber3: '1212',
  cardNumber4: '2323',
  month: '1',
  year: '12',
  userName: 'HAILEY CHOI',
};
const mockHandleInput = action('handleInput');

export const Default: Story = {
  args: {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    inputTypes: {
      inputLabel: 'default',
      inputInfo: Array.from({ length: 1 }, (_, index) => ({
        property: `default${index + 1}`,
        validateType: 'default type',
        maxLength: 10,
        placeHolder: 'default placeHolder',
        error: 'default error message',
      })),
    },
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput,
  },
};

export const CARD_NUMBER_FIELD: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    inputTypes: InputType.CARD_NUMBER,
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput,
  },
};

export const EXPIRY_DATE_FIELD: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    subtitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    inputTypes: InputType.EXPIRY_DATE,
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput,
  },
};

export const USER_NAME_FIELD: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    inputTypes: InputType.USER_NAME,
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput,
  },
};
