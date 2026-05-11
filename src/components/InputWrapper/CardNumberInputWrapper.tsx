import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';

interface CardNumberInputWrapperProps {
    setCardNumber: (index: number) => (value: string) => void;
    value: string[];
    handleBlur: () => void;
    handleFocus: () => void;
    errorMessage: string | null;
    setErrorMessage: (errorMessage: string | null) => void;
    hasTouched: boolean;
    getRef: (index: number) => (el: HTMLInputElement | null) => void;
}

export default function CardNumberInputWrapper({
    setCardNumber,
    value,
    handleBlur,
    handleFocus,
    errorMessage,
    setErrorMessage,
    hasTouched,
    getRef,
}: CardNumberInputWrapperProps) {
    return (
        <CardInputWrapper errorMessage={errorMessage}>
            {value.map((_, index) => (
                <CardInfoInput
                    key={`${index}th-input`}
                    ref={getRef(index)}
                    value={value[index]}
                    setValue={setCardNumber(index)}
                    size="small"
                    placeholder="1234"
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
