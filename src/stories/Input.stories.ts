// Input.stories.js

import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';
import InputType from '../constants/inputType';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockIndex = 0;
const mockInfo = InputType.CARD_NUMBER;
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
const mockErrorMessages = {
  0: '',
};
const mockSetErrorMessages = action('setErrorMessages');

export const Default: Story = {
  args: {
    info: mockInfo.inputInfo[mockIndex],
    index: mockIndex,
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput,
    errorMessages: mockErrorMessages,
    setErrorMessages: mockSetErrorMessages,
  },
};
