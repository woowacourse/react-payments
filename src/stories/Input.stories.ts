// Input.stories.js

import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';
import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockIndex = 0;
const mockInfo = INPUT_TYPE_CATEGORIES.CARD_NUMBER;
const mockHandleInput = action('handleInput');
const mockSetErrorMessages = action('setErrorMessages');

export const Default: Story = {
  args: {
    info: mockInfo.inputInfo[mockIndex],
    handleInput: mockHandleInput,
    isError: false,
    handleErrorMessage: mockSetErrorMessages,
  },
};

export const Error: Story = {
  args: {
    info: mockInfo.inputInfo[mockIndex],
    handleInput: mockHandleInput,
    isError: true,
    handleErrorMessage: mockSetErrorMessages,
  },
};
