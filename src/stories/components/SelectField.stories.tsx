import SelectField from '@/components/common/SelectField/SelectField';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SelectField',
  component: SelectField,
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'selectField',
    value: 'option1',
    onChange: () => {},
    onBlur: () => {},
    isError: false,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const Error: Story = {
  args: {
    name: 'selectField',
    value: 'option1',
    onChange: () => {},
    onBlur: () => {},
    isError: true,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};
