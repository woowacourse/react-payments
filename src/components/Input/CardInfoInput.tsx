import React from 'react';
import styled from '@emotion/styled';

type InputSize = 'small' | 'medium' | 'large';

const INPUT_WIDTH: Record<InputSize, string> = {
    small: '71px',
    medium: '152px',
    large: '315px',
};

interface CardInfoInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange' | 'value'> {
    value: string;
    setValue: (value: string) => void;
    inputBlock?: (value: string) => string | null;
    setErrorMessage?: (message: string | null) => void;
    isError: boolean;
    size: InputSize;
}

interface CardInfoInputStyleProps {
    inputSize: InputSize;
    isError: boolean;
}

const CardInfoInput = React.forwardRef<HTMLInputElement, CardInfoInputProps>(
    ({ value, setValue, inputBlock, setErrorMessage, isError, size, ...inputProps }, ref) => {
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const tmpValue = e.target.value;
            const error = inputBlock?.(tmpValue) ?? null;
            if (error !== null) {
                setErrorMessage?.(error);
                return;
            }
            setErrorMessage?.(null);
            setValue(tmpValue);
        };

        return (
            <InputStyle
                {...inputProps}
                ref={ref}
                isError={isError}
                value={value}
                onChange={handleInputChange}
                inputSize={size}
            />
        );
    }
);

CardInfoInput.displayName = 'CardInfoInput';

export default CardInfoInput;

const InputStyle = styled.input<CardInfoInputStyleProps>`
    border: 1px solid ${({ isError }) => (isError ? '#FF3D3D' : '#acacac')};
    &::placeholder {
        color: #acacac;
    }
    border-radius: 2px;
    height: 32px;
    width: ${({ inputSize }) => INPUT_WIDTH[inputSize]};
    padding: 8px;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border-color: #000000 !important;
    }
`;
