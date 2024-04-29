/* eslint-disable storybook/prefer-pascal-case */
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/common/dropdown/Dropdown';
import { useState } from 'react';
import { CARD_OPTIONS } from '../constants/card';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    value: {
      options: CARD_OPTIONS.map(data => data.value),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const 드랍다운: Story = {
  args: {
    value: '',
  },
  render: args => {
    const [value, setValue] = useState('');
    const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
      const newValue = event.currentTarget.getAttribute('data-value') || '';
      args.value = newValue;
      setValue(newValue);
    };
    return <Dropdown {...args} value={value} handleSelect={handleSelect} />;
  },
};
