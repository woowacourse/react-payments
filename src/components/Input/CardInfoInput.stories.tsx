import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CardInfoInput from './CardInfoInput';
import { isNumeric } from '../../utils/isNumeric';
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
                size="small"
                inputBlock={isNumeric}
                isError={false}
                maxLength={4}
                placeHolder="0000"
            />
        );
    },
};

export const EXPMonth: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <CardInfoInput
                value={value}
                setValue={setValue}
                size="medium"
                inputBlock={isMonthMatch}
                isError={false}
                maxLength={2}
                placeHolder="MM"
            />
        );
    },
};

export const EXPYear: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <CardInfoInput
                value={value}
                setValue={setValue}
                size="medium"
                inputBlock={isNumeric}
                isError={false}
                maxLength={2}
                placeHolder="YY"
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
                size="large"
                inputBlock={isNumeric}
                isError={false}
                maxLength={3}
                placeHolder="123"
            />
        );
    },
};
