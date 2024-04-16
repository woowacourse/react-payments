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
      description: '인풋 태그의 value 속성',
    },
    id: {
      control: 'text',
      description: '인풋 태그의 id 속성',
    },
    type: {
      options: ['text', 'number', 'email', 'password'],
      description: '인풋 태그의 type 속성',
    },
    placeholder: {
      control: 'string',
      description: '인풋 태그의 placeholder 속성',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '',
    value: '',
    type: 'text',
    placeholder: '값을 입력하세요.',
  },
};
