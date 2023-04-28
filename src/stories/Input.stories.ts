import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/common/Input/Input';

/**
 * `Input` 컴포넌트는 여러 속성을 제공하는 기본 `<input>` 을 제공합니다.
 * `LabeledInput` 의 자식 컴포넌트로 하나 또는 다수의 `Input` 컴포넌트를 사용하여, 다양한 종류의 필드를 만들 수 있도록 고안되었습니다.
 */
const meta = {
  component: Input,
  title: 'Input',
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { width: '150px', value: '' },
};

export default meta;
