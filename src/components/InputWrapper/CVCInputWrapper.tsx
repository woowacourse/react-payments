import { useState } from 'react';
import { isLengthMatch } from '../../utils/isLengthMatch';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';

interface CVCInputWrapperProps {
    validator: (value: string[]) => string | null;
    setCVCNumber: (value: string) => void;
    value: string[];
}

export default function CVCInputWrapper({ validator, setCVCNumber, value }: CVCInputWrapperProps) {
    const [inputError, setInputError] = useState<string | null>(validator(value));

    const errorMessage = inputError ?? validator(value);
    return (
        <CardInputWrapper errorMessage={errorMessage}>
            <CardInfoInput
                value={value[0]}
                setValue={setCVCNumber}
                type="cvc"
                placeHolder="123"
                validator={(value: string) => isLengthMatch(3, value)}
                maxLength={3}
                onError={setInputError}
            />
        </CardInputWrapper>
    );
}
