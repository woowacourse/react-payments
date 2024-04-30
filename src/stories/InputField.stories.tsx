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
      options: ['CARD_NUMBER', 'EXPIRY_DATE', 'USER_NAME', 'CVC', 'PASSWORD'],
      mapping: {
        CARD_NUMBER: INPUT_TYPE_CATEGORIES.CARD_NUMBER,
        EXPIRY_DATE: INPUT_TYPE_CATEGORIES.EXPIRY_DATE,
        USER_NAME: INPUT_TYPE_CATEGORIES.USER_NAME,
        CVC: INPUT_TYPE_CATEGORIES.CVC,
        PASSWORD: INPUT_TYPE_CATEGORIES.PASSWORD,
      },
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockHandleInput = action('handleInput');
const mockHandleNext = action('handleNext');
const mockHandleComplete = action('handleComplete');

export const Default: Story = {
  args: {
    title: '기본 입력 필드 제목',
    subtitle: '기본 입력 필드 부제목',
    inputTypes: {
      inputLabel: '기본 입력 필드',
      inputInfo: Array.from({ length: 1 }, (_, index) => ({
        property: `기본 ${index + 1}`,
        validateType: '기본 타입',
        maxLength: 10,
        minLength: 3,
        placeHolder: '기본 입력 필드 플레이스홀더',
        error: '기본 입력 필드 에러 메시지',
      })),
    },
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete,
  },
};

export const CARD_NUMBER_FIELD: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    inputTypes: INPUT_TYPE_CATEGORIES.CARD_NUMBER,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete,
  },
};

export const EXPIRY_DATE_FIELD: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    subtitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    inputTypes: INPUT_TYPE_CATEGORIES.EXPIRY_DATE,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete,
  },
};

export const USER_NAME_FIELD: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    inputTypes: INPUT_TYPE_CATEGORIES.USER_NAME,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete,
  },
};

export const CVC_FIELD: Story = {
  args: {
    title: 'CVC 번호를 입력해 주세요',
    inputTypes: INPUT_TYPE_CATEGORIES.CVC,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete,
  },
};

export const PASSWORD_FIELD: Story = {
  args: {
    title: '비밀번호를 입력해 주세요',
    inputTypes: INPUT_TYPE_CATEGORIES.PASSWORD,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete,
  },
};
