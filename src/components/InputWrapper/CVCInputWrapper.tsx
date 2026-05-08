import { useState } from 'react';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';

interface CVCInputWrapperProps {
    validator: (value: string) => string | null;
    setCVCNumber: (value: string) => void;
    value: string;
}

export default function CVCInputWrapper({ validator, setCVCNumber, value }: CVCInputWrapperProps) {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [hasTouched, setHasTouched] = useState(false);

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
                value={value}
                setValue={setCVCNumber}
                size="large"
                placeHolder="123"
                inputBlock={isNumeric}
                setErrorMessage={setErrorMessage}
                isError={hasTouched && value.length !== 3}
                maxLength={3}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
        </CardInputWrapper>
    );
}
