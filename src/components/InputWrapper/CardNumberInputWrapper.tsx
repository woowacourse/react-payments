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
    maxLengths: number[];
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
    maxLengths,
}: CardNumberInputWrapperProps) {
    return (
        <CardInputWrapper errorMessage={errorMessage}>
            {maxLengths.map((maxLength, index) => (
                <CardInfoInput
                    key={`${index}th-input`}
                    ref={getRef(index)}
                    value={value[index]}
                    setValue={setCardNumber(index)}
                    size="small"
                    placeholder="1234"
                    inputBlock={isNumeric}
                    setErrorMessage={setErrorMessage}
                    isError={hasTouched && value[index].length !== maxLength}
                    maxLength={maxLength}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
            ))}
        </CardInputWrapper>
    );
}
