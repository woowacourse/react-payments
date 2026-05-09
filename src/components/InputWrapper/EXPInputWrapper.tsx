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
}

export default function EXPInputWrapper({
    setEXPNumber,
    value,
    handleBlur,
    handleFocus,
    errorMessage,
    setErrorMessage,
    hasTouched,
}: EXPInputWrapperProps) {
    return (
        <CardInputWrapper errorMessage={errorMessage}>
            <CardInfoInput
                value={value[0]}
                setValue={setEXPNumber(0)}
                size="medium"
                placeHolder="MM"
                inputBlock={isMonthMatch}
                setErrorMessage={setErrorMessage}
                isError={hasTouched && value[0].length !== 2}
                maxLength={2}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            <CardInfoInput
                value={value[1]}
                setValue={setEXPNumber(1)}
                size="medium"
                placeHolder="YY"
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
