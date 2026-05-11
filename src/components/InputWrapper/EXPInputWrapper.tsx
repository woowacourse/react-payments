import { useEffect } from 'react';
import { isMonthMatch } from '../../utils/isMonthMatch';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';

interface EXPInputWrapperProps {
    setEXPNumber: (index: number) => (value: string) => void;
    value: string[];
    handleBlur: () => void;
    handleFocus: () => void;
    errorMessage: string | null;
    setErrorMessage: (errorMessage: string | null) => void;
    hasTouched: boolean;
    getRef: (index: number) => (el: HTMLInputElement | null) => void;
    focusFirst: () => void;
}

export default function EXPInputWrapper({
    setEXPNumber,
    value,
    handleBlur,
    handleFocus,
    errorMessage,
    setErrorMessage,
    hasTouched,
    getRef,
    focusFirst,
}: EXPInputWrapperProps) {
    useEffect(() => {
        focusFirst();
    }, []);

    return (
        <CardInputWrapper errorMessage={errorMessage}>
            <CardInfoInput
                ref={getRef(0)}
                value={value[0]}
                setValue={setEXPNumber(0)}
                size="medium"
                placeholder="MM"
                inputBlock={isMonthMatch}
                setErrorMessage={setErrorMessage}
                isError={hasTouched && value[0].length !== 2}
                maxLength={2}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            <CardInfoInput
                ref={getRef(1)}
                value={value[1]}
                setValue={setEXPNumber(1)}
                size="medium"
                placeholder="YY"
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
