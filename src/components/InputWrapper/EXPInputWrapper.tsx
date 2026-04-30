import { useState } from 'react';
import { isMonthMatch } from '../../utils/isMonthMatch';

import { isLengthMatch } from '../../utils/isLengthMatch';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';

interface EXPInputWrapperProps {
    validator: (value: string[]) => string | null;
    setEXPNumber: (index: number) => (value: string) => void;
    value: string[];
}

export default function EXPInputWrapper({ validator, setEXPNumber, value }: EXPInputWrapperProps) {
    const [inputErrors, setInputErrors] = useState<(string | null)[]>([null, null]);

    const setError = (index: number) => (message: string | null) => {
        setInputErrors((prev) => prev.with(index, message));
    };
    const [hasTouched, setHasTouched] = useState<boolean>(false);
    const errorAfterCompleted = hasTouched ? validator(value) : null;

    // TODO 여기도 중복 로직 제거
    const inputError =
        inputErrors.find((err) => err !== null) ?? null
            ? inputErrors.find((err) => err !== null) ?? null
            : errorAfterCompleted;

    return (
        <CardInputWrapper errorMessage={inputError}>
            <CardInfoInput
                value={value[0]}
                setValue={setEXPNumber(0)}
                type="exp"
                placeHolder="MM"
                validator={(value: string) => isMonthMatch(value)}
                maxLength={2}
                onError={setError(0)}
                onBlur={() => setHasTouched(true)}
                onFocus={() => setHasTouched(false)}
            />
            <CardInfoInput
                value={value[1]}
                setValue={setEXPNumber(1)}
                type="exp"
                placeHolder="YY"
                validator={(value: string) => isLengthMatch(2, value)}
                maxLength={2}
                onError={setError(1)}
                onBlur={() => setHasTouched(true)}
                onFocus={() => setHasTouched(false)}
                // TODO 연도(YY)라 setError(1) 이어야함
            />
        </CardInputWrapper>
    );
}
