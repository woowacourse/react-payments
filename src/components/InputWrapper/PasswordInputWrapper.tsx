import { useState } from 'react';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';

interface PasswordInputWrapperProps {
    validator: (value: string) => string | null;
    setPassword: (value: string) => void;
    value: string;
}

export default function PasswordInputWrapper({ validator, setPassword, value }: PasswordInputWrapperProps) {
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
                setValue={setPassword}
                isError={hasTouched && value.length !== 2}
                setErrorMessage={setErrorMessage}
                size="large"
                maxLength={2}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeHolder=""
            />
        </CardInputWrapper>
    );
}
