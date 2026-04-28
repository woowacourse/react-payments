import styled from '@emotion/styled';

interface InputProps {
    value?: number;
    setValue?: (value: string) => void;
    type: 'card-number' | 'exp' | 'cvc';
}

export default function Input({ value, setValue, type }: InputProps) {
    return <InputStyle value={value} onChange={(e) => setValue(e.target.value)} type={type} />;
}

const InputStyle = styled.input<InputProps>`
    border: 1px solid #acacac;
    &::placeholder {
        color: #acacac;
    }
    border-radius: 2px;
    height: 32px;
    width: ${({ type }) => {
        if (type === 'card-number') return '71px';
        if (type === 'exp') return '152px';
        if (type === 'cvc') return '315px';
    }};
    padding: 8px;
`;
