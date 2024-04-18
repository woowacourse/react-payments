import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/composables/Input';
import { fn } from '@storybook/test';
import GlobalStyles from '../GlobalStyles';

const meta = {
  title: 'Composable/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
  argTypes: {
    value: {
      control: 'text',
      description: 'value 속성',
    },
    id: {
      control: 'text',
      description: 'id 속성',
    },
    type: {
      options: ['text', 'number', 'email', 'password', 'tel'],
      description: 'type 속성',
    },
    placeholder: {
      control: 'string',
      description: 'placeholder 속성',
    },
    isError: {
      control: 'boolean',
      description: '에러 감지 속성 값',
    },
    maxLength: {
      control: 'number',
      description: '입력값 최대 길이',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    id: '',
    value: '',
    type: 'text',
    placeholder: '1234',
    isError: false,
    maxLength: 4,
  },
};

export const Month: Story = {
  args: {
    id: '',
    value: '',
    type: 'text',
    placeholder: 'MM',
    isError: false,
    maxLength: 2,
  },
};

export const Year: Story = {
  args: {
    id: '',
    value: '',
    type: 'text',
    placeholder: 'YY',
    isError: false,
    maxLength: 2,
  },
};
