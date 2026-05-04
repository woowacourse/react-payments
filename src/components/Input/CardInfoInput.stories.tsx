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
        const [error, setError] = useState<string | null>(null);
        return (
            <>
                <CardInfoInput
                    value={value}
                    setValue={setValue}
                    size="small"
                    validator={isNumeric}
                    isError={error !== null}
                    maxLength={4}
                    placeHolder="0000"
                    onError={setError}
                />
                {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
            </>
        );
    },
};

export const EXPMonth: Story = {
    render: () => {
        const [value, setValue] = useState('');
        const [error, setError] = useState<string | null>(null);
        return (
            <>
                <CardInfoInput
                    value={value}
                    setValue={setValue}
                    size="medium"
                    validator={isMonthMatch}
                    isError={error !== null}
                    maxLength={2}
                    placeHolder="MM"
                    onError={setError}
                />
                {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
            </>
        );
    },
};

export const EXPYear: Story = {
    render: () => {
        const [value, setValue] = useState('');
        const [error, setError] = useState<string | null>(null);
        return (
            <>
                <CardInfoInput
                    value={value}
                    setValue={setValue}
                    size="medium"
                    validator={isNumeric}
                    isError={error !== null}
                    maxLength={2}
                    placeHolder="YY"
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
                    size="large"
                    validator={isNumeric}
                    isError={error !== null}
                    maxLength={3}
                    placeHolder="123"
                    onError={setError}
                />
                {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
            </>
        );
    },
};
