import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import { fn } from 'storybook/test';

import InputField from './InputField';

const meta = {
  title: 'InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '카드 정보를 입력받는 공용 InputField 컴포넌트입니다. DOM input wrapper로 isError는 스타일 제어용 추가 prop',
      },
    },
  },

  tags: ['autodocs'],

  argTypes: {
    isError: {
      control: 'boolean',
      description: '에러 상태 여부. true일 때 빨간 테두리가 표시됩니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: { table: { disable: true } },
  },

  args: { onClick: fn(), placeholder: '카드 번호를 입력해주세요' },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isError: false,
  },
};

export const Focus: Story = {
  args: {
    isError: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox'));
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },
};
