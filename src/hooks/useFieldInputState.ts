import { useCallback, useRef, useState } from 'react';

interface UseFieldInputStateProps {
    values: string[];
    setValue: (index: number) => (value: string) => void;
    validator: (values: string[]) => string | null;
    isFilled: (value: string, index: number) => boolean;
    fieldCount: number;
}

export const useFieldInputState = ({ values, setValue, validator, isFilled, fieldCount }: UseFieldInputStateProps) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [hasTouched, setHasTouched] = useState(false);
    const refs = useRef<(HTMLInputElement | null)[]>(Array(fieldCount).fill(null));
    const skipFocusClear = useRef(false);

    const getRef = (index: number) => (el: HTMLInputElement | null) => {
        refs.current[index] = el;
    };

    const focusFirst = useCallback(() => {
        refs.current[0]?.focus();
    }, []);

    const focusWithError = useCallback((message: string) => {
        skipFocusClear.current = true;
        setErrorMessage(message);
        refs.current[0]?.focus();
    }, []);

    const handleChange = (index: number) => (value: string) => {
        setValue(index)(value);
        if (isFilled(value, index) && refs.current[index + 1]) {
            refs.current[index + 1]?.focus();
        }
    };

    const handleBlur = () => {
        setHasTouched(true);
        setErrorMessage(validator(values));
    };

    const handleFocus = () => {
        if (skipFocusClear.current) {
            skipFocusClear.current = false;
            return;
        }
        setHasTouched(false);
        setErrorMessage(null);
    };

    return { errorMessage, setErrorMessage, hasTouched, handleBlur, handleFocus, getRef, focusFirst, focusWithError, handleChange };
};
