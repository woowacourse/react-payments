import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return <Input value={value} type={{ type: 'exp', expType: 'month' }} setValue={setValue} />;
    },
};
