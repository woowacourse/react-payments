import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Select from '../components/common/Select';
import { useState } from 'react';

const DEFAULT_OPTIONS = [
  { value: 'example value 1', label: 'example option 1' },
  { value: 'example value 2', label: 'example option 2' },
];

const meta = {
  title: 'Select',
  component: Select,
  argTypes: {
    placeholder: {
      description: 'placeholder text',
      control: { type: 'text' },
    },
    options: {
      options: {
        default: DEFAULT_OPTIONS,
        '과일 선택지': [
          { value: 'apple', label: '사과' },
          { value: 'banana', label: '바나나' },
          { value: 'cherry', label: '체리' },
        ],
        '학년 선택지': [
          { value: '1', label: '1학년' },
          { value: '2', label: '2학년' },
          { value: '3', label: '3학년' },
          { value: '4', label: '4학년' },
        ],
        '카드사 선택지': [
          { value: 'BC카드', label: 'BC카드' },
          { value: '신한카드', label: '신한카드' },
          { value: '삼성카드', label: '삼성카드' },
          { value: '현대카드', label: '현대카드' },
          { value: '롯데카드', label: '롯데카드' },
          { value: '하나카드', label: '하나카드' },
          { value: '씨티카드', label: '씨티카드' },
          { value: '카카오뱅크', label: '카카오뱅크' },
        ],
      },
      control: { type: 'select' },
    },
  },

  args: {
    onChange: fn(),
  },

  decorators: [
    (Story, context) => {
      const [value, setValue] = useState(context.args.value);
      const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value);

      return <Story args={{ ...context.args, value, onChange }} />;
    },
  ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: 'choose an option!',
    options: DEFAULT_OPTIONS,
  },
};
