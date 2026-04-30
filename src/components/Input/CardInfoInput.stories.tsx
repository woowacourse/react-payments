import type { Meta, StoryObj } from '@storybook/react';
import CardInfoInput from './CardInfoInput';
import { useState } from 'react';
import { isLengthMatch } from '../../utils/isLengthMatch';
import { isMonthMatch } from '../../utils/isMonthMatch';

const meta: Meta<typeof CardInfoInput> = {
    title: 'Components/CardInfoInput',
    component: CardInfoInput,
};

export default meta;
type Story = StoryObj<typeof CardInfoInput>;

export const CardNumber: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <CardInfoInput
                value={value}
                setValue={setValue}
                type="card-number"
                validator={(v) => isLengthMatch(4, v)}
                maxLength={4}
                placeHolder="0000"
            />
        );
    },
};

export const EXP: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <CardInfoInput
                value={value}
                setValue={setValue}
                type="exp"
                validator={(v) => isMonthMatch(v)}
                maxLength={2}
                placeHolder="MM"
            />
        );
    },
};

export const CVC: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <CardInfoInput
                value={value}
                setValue={setValue}
                type="cvc"
                validator={(v) => isLengthMatch(3, v)}
                maxLength={3}
                placeHolder="000"
            />
        );
    },
};
