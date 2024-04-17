import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../components/InputField';
import InputType from '../constants/inputType';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'InputField',
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockTitle = '결제할 카드 번호를 입력해 주세요';
const mockSubtitle = '본인 명의의 카드만 결제 가능합니다.';
const mockInputTypes = InputType.CARD_NUMBER;
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
    title: mockTitle,
    subtitle: mockSubtitle,
    inputTypes: mockInputTypes,
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput,
  },
};
