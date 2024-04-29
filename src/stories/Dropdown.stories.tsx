/* eslint-disable storybook/prefer-pascal-case */
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/common/dropdown/Dropdown';
import { useState } from 'react';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const 드랍다운: Story = {
  render: args => {
    const [value, setValue] = useState('');
    const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
      const newValue = event.currentTarget.getAttribute('data-value') || '';
      setValue(newValue);
    };
    return <Dropdown {...args} value={value} handleSelect={handleSelect} />;
  },
};
