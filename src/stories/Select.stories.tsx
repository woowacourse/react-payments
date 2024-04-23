import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyles from '../GlobalStyles';
import Select from '../components/composables/Select';
import { fn } from '@storybook/test';

const meta = {
  title: 'Composable/Select',
  component: Select,
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
    placeholder: {
      control: 'text',
      description: 'placeholder를 작성합니다.',
    },
    options: {
      control: 'object',
      description: '옵션들을 지정할 수 있습니다.',
    },
    value: {
      control: 'text',
      description: '선택된 값을 입력합니다.',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    options: ['value1', 'value2', 'value3', 'value4'],
    placeholder: 'Choose Option',
    isError: false,
  },
};

export const Invalid: Story = {
  args: {
    value: '',
    options: ['value1', 'value2', 'value3', 'value4'],
    placeholder: 'Choose Option',
    isError: true,
  },
};

export const CardBrands: Story = {
  args: {
    value: '',
    options: [
      'BC카드',
      '신한카드',
      '카카오뱅크',
      '현대카드',
      '우리카드',
      '롯데카드',
      '하나카드',
      '국민카드',
    ],
    placeholder: '카드사를 선택해주세요.',
    isError: false,
  },
};
