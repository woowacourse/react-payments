import type { Meta, StoryObj } from '@storybook/react';
import SelectBox from './SelectBox';

const meta: Meta<typeof SelectBox> = {
  title: 'Common/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  argTypes: {
    values: {
      control: 'object',
      description: '값',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    values: ['a', 'b', 'c', 'd'],
  },
  render: (args) => {
    return (
      <SelectBox {...args}>
        {args.values &&
          args.values.map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
      </SelectBox>
    );
  },
};
