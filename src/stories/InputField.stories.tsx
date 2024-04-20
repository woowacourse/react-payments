import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../components/InputField';
import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    inputTypes: {
      options: ['CARD_NUMBER', 'EXPIRY_DATE', 'USER_NAME'],
      mapping: {
        CARD_NUMBER: INPUT_TYPE_CATEGORIES.CARD_NUMBER,
        EXPIRY_DATE: INPUT_TYPE_CATEGORIES.EXPIRY_DATE,
        USER_NAME: INPUT_TYPE_CATEGORIES.USER_NAME,
      },
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockHandleInput = action('handleInput');

export const Default: Story = {
  args: {
    inputTypes: {
      inputLabel: '기본 입력 필드',
      inputInfo: Array.from({ length: 1 }, (_, index) => ({
        property: `기본 ${index + 1}`,
        validateType: '기본 타입',
        maxLength: 10,
        placeHolder: '기본 입력 필드 플레이스홀더',
        error: '기본 입력 필드 에러 메시지',
      })),
    },
    handleInput: mockHandleInput,
  },
};

export const CARD_NUMBER_FIELD: Story = {
  args: {
    inputTypes: INPUT_TYPE_CATEGORIES.CARD_NUMBER,
    handleInput: mockHandleInput,
  },
};

export const EXPIRY_DATE_FIELD: Story = {
  args: {
    inputTypes: INPUT_TYPE_CATEGORIES.EXPIRY_DATE,
    handleInput: mockHandleInput,
  },
};

export const USER_NAME_FIELD: Story = {
  args: {
    inputTypes: INPUT_TYPE_CATEGORIES.USER_NAME,
    handleInput: mockHandleInput,
  },
};
