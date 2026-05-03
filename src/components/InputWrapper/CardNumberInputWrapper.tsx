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
    // TODO CVCInputWrapper, EXPInputWrapper에 존재하는 에러 다루기 위한 유사한 로직들 커스텀 훅으로 분리
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
                    validator={isNumeric}
                    isError={(hasTouched && value[index].length !== 4) || inputErrors[index] !== null}
                    maxLength={4}
                    onError={setError(index)}
                    onBlur={() => setHasTouched(true)}
                    onFocus={() => setHasTouched(false)}
                />
            ))}
        </CardInputWrapper>
    );
}
