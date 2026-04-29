import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CardInfoInput from './CardInfoInput';

const meta: Meta<typeof CardInfoInput> = {
    title: 'Components/Input',
    component: CardInfoInput,
};

export default meta;
type Story = StoryObj<typeof CardInfoInput>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <CardInfoInput
                value={value}
                type={{ type: 'exp', expType: 'month' }}
                setValue={setValue}
                validator={() => true}
            />
        );
    },
};
