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
const mockHandleInput = action('handleInput');
const mockSetErrorMessages = action('handleErrorMessage');

export const Default: Story = {
  args: {
    info: mockInfo.inputInfo[mockIndex],
    index: mockIndex,
    handleInput: mockHandleInput,
    isError: false,
    handleErrorMessage: mockSetErrorMessages,
  },
};
