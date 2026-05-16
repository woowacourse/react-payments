import { useState } from 'react';

interface UseCardInfoInputFieldProps {
    validator: (values: string[]) => string | null;
    fieldCount: number;
}

export const useCardInfoInputField = ({ validator, fieldCount }: UseCardInfoInputFieldProps) => {
    const [values, setValues] = useState(Array(fieldCount).fill(''));
    const setValue = (index: number) => (value: string) => setValues((prev) => prev.with(index, value));
    const isSatisfy = validator(values) === null;
    return { values, setValue, isSatisfy };
};
