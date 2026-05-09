import { useState } from 'react';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';

interface CardNumberInputWrapperProps {
    setCardNumber: (index: number) => (value: string) => void;
    value: string[];
    handleBlur: () => void;
    handleFocus: () => void;
    errorMessage: string | null;
    setErrorMessage: (errorMessage: string | null) => void;
    hasTouched: boolean;
}

export default function CardNumberInputWrapper({
    setCardNumber,
    value,
    handleBlur,
    handleFocus,
    errorMessage,
    setErrorMessage,
    hasTouched,
}: CardNumberInputWrapperProps) {
    return (
        <CardInputWrapper errorMessage={errorMessage}>
            {value.map((_, index) => (
                <CardInfoInput
                    key={`${index}th-input`}
                    value={value[index]}
                    setValue={setCardNumber(index)}
                    size="small"
                    placeholder="1234"
                    inputBlock={isNumeric}
                    setErrorMessage={setErrorMessage}
                    isError={hasTouched && value[index].length !== 4}
                    maxLength={4}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
            ))}
        </CardInputWrapper>
    );
}
