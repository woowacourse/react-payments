/* eslint-disable react/function-component-definition */
import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

/**
 * `Input`은 사용자가 입력값을 작성할 때 필요한 기본적인 컴포넌트입니다.
 */
const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const FullWidthInput: Story = {
  args: {
    type: 'string',
    placeholder: '입력하세요.',
    width: '100%',
    textAlign: 'center',
  },
};

export const HalfWidthInput: Story = {
  args: {
    type: 'string',
    placeholder: '입력하세요.',
    width: '50%',
    textAlign: 'center',
  },
};

export const SmallWidthInput: Story = {
  args: {
    type: 'string',
    placeholder: '입력하세요.',
    width: '20%',
    textAlign: 'center',
  },
};

export const FixedWidthInput: Story = {
  args: {
    type: 'string',
    placeholder: '입력하세요.',
    width: '120px',
    textAlign: 'center',
  },
};

export const TextAlignStartInput: Story = {
  args: {
    type: 'string',
    placeholder: '입력하세요.',
    width: '60%',
    textAlign: 'start',
  },
};

export const UnderlineInput: Story = {
  args: {
    type: 'string',
    placeholder: '입력하세요.',
    width: '240px',
    textAlign: 'start',
    underline: true,
    background: 'white',
  },
};

export const InvalidInput: Story = {
  args: {
    type: 'string',
    placeholder: '입력하세요.',
    width: '240px',
    textAlign: 'start',
    isValid: false,
  },
};

export const InvalidUnderlineInput: Story = {
  args: {
    type: 'string',
    placeholder: '입력하세요.',
    width: '240px',
    textAlign: 'start',
    underline: true,
    background: 'white',
    isValid: false,
  },
};
