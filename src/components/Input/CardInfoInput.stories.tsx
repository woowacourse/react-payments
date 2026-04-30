import type { Meta, StoryObj } from '@storybook/react';
import CardInfoInput from './CardInfoInput';
import { useState } from 'react';

const meta: Meta<typeof CardInfoInput> = {
    title: 'Components/CardInfoInput',
    component: CardInfoInput,
};

export default meta;
type Story = StoryObj<typeof CardInfoInput>;

export const CardNumber: Story = {
    render: () => {
        const [value, setValue] = useState('');
        const [error, setError] = useState<string | null>(null);
        return (
            <>
                <CardInfoInput
                    value={value}
                    setValue={setValue}
                    type="card-number"
                    validator={(v) => v.length === 4}
                    maxLength={4}
                    placeHolder="0000"
                    onError={setError}
                />
                {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
            </>
        );
    },
};

export const EXP: Story = {
    render: () => {
        const [value, setValue] = useState('');
        const [error, setError] = useState<string | null>(null);
        return (
            <>
                <CardInfoInput
                    value={value}
                    setValue={setValue}
                    type="exp"
                    validator={(v) => v.length === 2}
                    maxLength={2}
                    placeHolder="MM"
                    onError={setError}
                />
                {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
            </>
        );
    },
};

export const CVC: Story = {
    render: () => {
        const [value, setValue] = useState('');
        const [error, setError] = useState<string | null>(null);
        return (
            <>
                <CardInfoInput
                    value={value}
                    setValue={setValue}
                    type="cvc"
                    validator={(v) => v.length === 3}
                    maxLength={3}
                    placeHolder="123"
                    onError={setError}
                />
                {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
            </>
        );
    },
};
