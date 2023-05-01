/* eslint-disable react/function-component-definition */
import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

/**
 * `Button`은 일반 버튼, 입력 버튼, 취소 버튼을 역할을 하는 가장 기본적인 버튼 컴포넌트입니다.
 */
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ConfirmButton: Story = {
  args: {
    text: '다음',
    disabled: false,
    type: 'button',
  },
};

export const DisableButton: Story = {
  args: {
    text: '다음',
    disabled: true,
    type: 'button',
  },
};
