import { useCallback, useRef, useState } from 'react';

interface UseCardInfoInputFieldProps {
    validator: (values: string[]) => string | null;
    fieldCount: number;
    isFilled: (value: string) => boolean;
}

export const useCardInfoInputField = ({ validator, fieldCount, isFilled }: UseCardInfoInputFieldProps) => {
    const [values, setValues] = useState(Array(fieldCount).fill(''));
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [hasTouched, setHasTouched] = useState(false);

    const refs = useRef<(HTMLInputElement | null)[]>(Array(fieldCount).fill(null));

    const getRef = (index: number) => (el: HTMLInputElement | null) => {
        refs.current[index] = el;
    };

    const focusFirst = useCallback(() => {
        refs.current[0]?.focus();
    }, []);

    const setValueByIndex = (index: number) => (value: string) => {
        setValues((prev) => prev.with(index, value));
        if (isFilled(value) && index < fieldCount - 1) {
            refs.current[index + 1]?.focus();
        }
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
        getRef,
        focusFirst,
    };
};
