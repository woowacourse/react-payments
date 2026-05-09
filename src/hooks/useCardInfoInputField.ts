import { useState } from 'react';

interface UseCardInfoInputFieldProps {
    validator: (values: string[]) => string | null;
    fieldCount: number;
}

export const useCardInfoInputField = ({ validator, fieldCount }: UseCardInfoInputFieldProps) => {
    const [values, setValues] = useState(Array(fieldCount).fill('')); // fieldCount만큼 빈 배열 만들기
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // errorMessage가 담길 곳(null이면 정상 상태)
    const [hasTouched, setHasTouched] = useState(false); // blur, focus 상태를 기억하기 위한

    const setValueByIndex = (index: number) => (value: string) => {
        setValues((prev) => prev.with(index, value));
    };

    const handleBlur = () => {
        setHasTouched(true);
        setErrorMessage(validator(values));
    };

    const handleFocus = () => {
        setHasTouched(false);
        setErrorMessage(null);
    };

    const isSatisfy = validator(values) === null;

    return {
        values,
        setValues,
        setValueByIndex,
        errorMessage,
        setErrorMessage,
        hasTouched,
        setHasTouched,
        handleBlur,
        handleFocus,
        isSatisfy,
    };
};
