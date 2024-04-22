import Select from './Select';
import { generateArgTypes } from '@utils/storybook/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'select 요소를 생성하는 컴포넌트',
      },
    },
  },
  argTypes: {
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: '입력한 값',
    },
    placeholder: {
      ...generateArgTypes({ control: 'text' }),
    },
    options: {
      ...generateArgTypes({ control: 'object' }),
    },
    onChange: {
      ...generateArgTypes({ control: 'function' }),
      description: '입력 시 동작하는 이벤트 핸들러',
    },
  },
  args: {
    value: '',
    placeholder: '선택해주세요',
    options: [
      { value: '1', text: 'Option 1' },
      { value: '2', text: 'Option 2' },
      { value: '3', text: 'Option 3' },
    ],
    onChange: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '기본 상태' } },
  },
};

export const Selected: Story = {
  parameters: {
    docs: { description: { story: '옵션을 선택한 상태' } },
  },
  args: {
    value: '3',
  },
};
