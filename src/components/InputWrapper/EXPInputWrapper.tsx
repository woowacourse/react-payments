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
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [hasTouched, setHasTouched] = useState<boolean>(false);

    const handleBlur = () => {
        setHasTouched(true);
        setErrorMessage(validator(value));
    };

    const handleFocus = () => {
        setHasTouched(false);
        setErrorMessage(null);
    };

    return (
        <CardInputWrapper errorMessage={errorMessage}>
            <CardInfoInput
                value={value[0]}
                setValue={setEXPNumber(0)}
                size="medium"
                placeHolder="MM"
                inputBlock={isMonthMatch}
                setErrorMessage={setErrorMessage}
                isError={hasTouched && value[0].length !== 2}
                maxLength={2}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            <CardInfoInput
                value={value[1]}
                setValue={setEXPNumber(1)}
                size="medium"
                placeHolder="YY"
                inputBlock={isNumeric}
                setErrorMessage={setErrorMessage}
                isError={hasTouched && value[1].length !== 2}
                maxLength={2}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
        </CardInputWrapper>
    );
}
