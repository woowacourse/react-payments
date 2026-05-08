import { useState } from 'react';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';

interface CardNumberInputWrapperProps {
    validator: (value: string[]) => string | null;
    setCardNumber: (index: number) => (value: string) => void;
    value: string[];
}

export default function CardNumberInputWrapper({ validator, setCardNumber, value }: CardNumberInputWrapperProps) {
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
            {value.map((_, index) => (
                <CardInfoInput
                    key={`${index}th-input`}
                    value={value[index]}
                    setValue={setCardNumber(index)}
                    size="small"
                    placeHolder="1234"
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
