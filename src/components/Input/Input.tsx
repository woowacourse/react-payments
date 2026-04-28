import styled from '@emotion/styled';
import { isCardNumber } from '../../utils/isCardNumber';
import { isCVCNumber } from '../../utils/isCVCNumber';
import { isMonthNumberLength } from '../../utils/isMonthNumberLength';
import { isYearNumber } from '../../utils/isYearNumber';
import { useState } from 'react';
import { isMonthNumberRange } from '../../utils/isMonthRange';

type InputType = { type: 'card-number' } | { type: 'exp'; expType: 'month' | 'year' } | { type: 'cvc' };

interface InputProps {
    value: string;
    setValue: (value: string) => void;
    type: InputType;
}

interface InputStyleProps {
    inputType: 'card-number' | 'exp' | 'cvc';
}

export default function Input({ value, setValue, type }: InputProps) {
    const [isStringError, setIsStringError] = useState<boolean>(false);
    const [isRangeError, setIsRangeError] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const tmpValue = e.target.value;
        console.log(Number.isNaN(tmpValue));
        if (Number.isNaN(Number(tmpValue))) {
            setIsStringError(true);
            return;
        }
        if (type.type === 'card-number') {
            if (!isCardNumber(tmpValue)) {
                return;
            }
            setValue(e.target.value);
            setIsStringError(false);
        } else if (type.type === 'cvc') {
            if (!isCVCNumber(tmpValue)) {
                return;
            }
            setValue(e.target.value);
            setIsStringError(false);
        } else if (type.type === 'exp' && type.expType === 'month') {
            if (tmpValue === '') {
                setValue(e.target.value);
                setIsStringError(false);
                setIsRangeError(false);
                return;
            }

            if (!isMonthNumberLength(tmpValue)) {
                return;
            }
            if (!isMonthNumberRange(tmpValue)) {
                setIsRangeError(true);
                setValue(e.target.value);
                return;
            }

            setValue(e.target.value);
            setIsStringError(false);
            setIsRangeError(false);
        } else if (type.type === 'exp' && type.expType === 'year') {
            if (!isYearNumber(tmpValue)) {
                return;
            }
            setValue(e.target.value);
            setIsStringError(false);
        }
    };

    return (
        <>
            <InputStyle value={value} onChange={(e) => handleInputChange(e)} inputType={type.type} />
            {isStringError && '숫자만 입력 가능합니다.'}
            {isRangeError && '1~12사이 숫자를 입력해주세요.'}
        </>
    );
}

const InputStyle = styled.input<InputStyleProps>`
    border: 1px solid #acacac;
    &::placeholder {
        color: #acacac;
    }
    border-radius: 2px;
    height: 32px;
    width: ${({ inputType }) => {
        if (inputType === 'card-number') return '71px';
        if (inputType === 'exp') return '152px';
        if (inputType === 'cvc') return '315px';
    }};
    padding: 8px;
`;
