import { useState } from 'react';
import { isMonthMatch } from '../../utils/isMonthMatch';

import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';

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

    const inputError = inputErrors.find((err) => err !== null) ?? errorAfterCompleted;

    return (
        <CardInputWrapper errorMessage={inputError}>
            <CardInfoInput
                value={value[0]}
                setValue={setEXPNumber(0)}
                type="exp"
                placeHolder="MM"
                validator={isMonthMatch}
                isError={(hasTouched && value[0].length !== 2) || inputErrors[0] !== null}
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
                validator={isNumeric}
                isError={(hasTouched && value[1].length !== 2) || inputErrors[1] !== null}
                maxLength={2}
                onError={setError(1)}
                onBlur={() => setHasTouched(true)}
                onFocus={() => setHasTouched(false)}
            />
        </CardInputWrapper>
    );
}
