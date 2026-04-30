import { useState } from 'react';
import { isLengthMatch } from '../../utils/isLengthMatch';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';

interface CardNumberInputWrapperProps {
    validator: (value: string[]) => string | null;
    setCardNumber: (index: number) => (value: string) => void;
    value: string[];
}

export default function CardNumberInputWrapper({ validator, setCardNumber, value }: CardNumberInputWrapperProps) {
    const [inputErrors, setInputErrors] = useState<(string | null)[]>([null, null, null, null]);

    const setError = (index: number) => (message: string | null) => {
        setInputErrors((prev) => prev.with(index, message));
    };

    const [hasTouched, setHasTouched] = useState(false);
    const errorAfterCompleted = hasTouched ? validator(value) : null;

    const inputError = inputErrors.find((err) => err !== null) ?? errorAfterCompleted;

    return (
        <CardInputWrapper errorMessage={inputError}>
            {value.map((_, index) => (
                <CardInfoInput
                    key={`${index}th-input`}
                    value={value[index]}
                    setValue={setCardNumber(index)}
                    type="card-number"
                    placeHolder="1234"
                    validator={(value: string) => isLengthMatch(4, value)}
                    maxLength={4}
                    onError={setError(index)}
                    onBlur={() => setHasTouched(true)}
                    onFocus={() => setHasTouched(false)}
                />
            ))}
        </CardInputWrapper>
    );
}
