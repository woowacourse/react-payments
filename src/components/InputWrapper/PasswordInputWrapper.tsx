import { useEffect } from 'react';
import { isNumeric } from '../../utils/isNumeric';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';

interface PasswordInputWrapperProps {
    setPassword: (value: string) => void;
    value: string;
    handleBlur: () => void;
    handleFocus: () => void;
    errorMessage: string | null;
    setErrorMessage: (errorMessage: string | null) => void;
    hasTouched: boolean;
    getRef: (index: number) => (el: HTMLInputElement | null) => void;
    focusFirst: () => void;
}

export default function PasswordInputWrapper({
    setPassword,
    value,
    handleBlur,
    handleFocus,
    errorMessage,
    setErrorMessage,
    hasTouched,
    getRef,
    focusFirst,
}: PasswordInputWrapperProps) {
    useEffect(() => {
        focusFirst();
    }, []);

    return (
        <CardInputWrapper errorMessage={errorMessage}>
            <CardInfoInput
                ref={getRef(0)}
                value={value}
                setValue={setPassword}
                isError={hasTouched && value.length !== 2}
                setErrorMessage={setErrorMessage}
                inputBlock={isNumeric}
                size="large"
                maxLength={2}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder=""
                type="password"
            />
        </CardInputWrapper>
    );
}
