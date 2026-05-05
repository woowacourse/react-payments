import  { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardNumberSection from './CardNumberSection';

const meta: Meta<typeof CardNumberSection> = {
  title: 'Components/CardNumberSection',
  component: CardNumberSection,
};

export default meta;
type Story = StoryObj<typeof CardNumberSection>;

export const Default: Story = {
  // render 함수를 통해 스토리북 안에서 상태(state)를 직접 관리합니다.
  render: () => {
    const [value, setValue] = useState(["", "", "", ""]);

    return (
      <CardNumberSection 
        value={value} 
        setValue={setValue} 
      />
    );
  },
};