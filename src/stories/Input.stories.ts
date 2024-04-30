// Input.stories.js

import type { Meta, StoryObj } from '@storybook/react';
import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { action } from '@storybook/addon-actions';
import { Input } from '../components/Input';

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
const mockHandleNext = action('handleNext');

export const Default: Story = {
  args: {
    key: mockIndex,
    ref: null,
    info: mockInfo.inputInfo[mockIndex],
    handleInput: mockHandleInput,
    isError: false,
    handleErrorMessage: mockSetErrorMessages,
    onNext: mockHandleNext,
  },
};

export const Error: Story = {
  args: {
    key: mockIndex,
    ref: null,
    info: mockInfo.inputInfo[mockIndex],
    handleInput: mockHandleInput,
    isError: true,
    handleErrorMessage: mockSetErrorMessages,
    onNext: mockHandleNext,
  },
};
