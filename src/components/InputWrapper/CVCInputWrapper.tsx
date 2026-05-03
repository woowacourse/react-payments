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
    const [inputError, setInputError] = useState<string | null>(null);

    const [hasTouched, setHasTouched] = useState(false);
    const errorAfterCompleted = hasTouched ? validator(value) : null;
    const errorMessage = inputError ?? errorAfterCompleted;

    return (
        <CardInputWrapper errorMessage={errorMessage}>
            <CardInfoInput
                value={value}
                setValue={setCVCNumber}
                type="cvc"
                placeHolder="123"
                validator={isNumeric}
                isError={(hasTouched && value.length !== 3) || inputError !== null}
                maxLength={3}
                onError={setInputError}
                onBlur={() => setHasTouched(true)}
                onFocus={() => setHasTouched(false)}
            />
        </CardInputWrapper>
    );
}
