import styled from '@emotion/styled';
import { isCardNumber } from '../../utils/isCardNumber';
import { isCVCNumber } from '../../utils/isCVCNumber';
import { isMonthNumber } from '../../utils/isMonthNumber';
import { isYearNumber } from '../../utils/isYearNumber';

type InputType = { type: 'card-number' } | { type: 'exp'; expType: 'month' | 'year' } | { type: 'cvc' };

interface InputProps {
    value?: string;
    setValue?: (value: string) => void;
    type: InputType;
}

interface InputStyleProps {
    inputType: 'card-number' | 'exp' | 'cvc';
}

export default function Input({ value, setValue, type }: InputProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const tmpValue = e.target.value;
        if (type.type === 'card-number') {
            if (isCardNumber(tmpValue)) return;
            setValue(e.target.value);
        } else if (type.type === 'cvc') {
            if (isCVCNumber(tmpValue)) return;
            setValue(e.target.value);
        } else if (type.type === 'exp' && type.expType === 'month') {
            if (isMonthNumber(tmpValue)) return;
            setValue(e.target.value);
        } else if (type.type === 'exp' && type.expType === 'year') {
            if (isYearNumber(tmpValue)) return;
            setValue(e.target.value);
        }
    };

    return <InputStyle value={value} onChange={(e) => handleInputChange(e)} inputType={type.type} />;
}

const InputStyle = styled.input<InputStyleProps>`
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
