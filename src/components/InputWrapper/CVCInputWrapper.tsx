import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';

interface CVCInputWrapperProps {
    setCVCNumber: (value: string) => void;
    value: string;
    handleBlur: () => void;
    handleFocus: () => void;
    errorMessage: string | null;
    setErrorMessage: (errorMessage: string | null) => void;
    hasTouched: boolean;
}

export default function CVCInputWrapper({
    setCVCNumber,
    value,
    handleBlur,
    handleFocus,
    errorMessage,
    setErrorMessage,
    hasTouched,
}: CVCInputWrapperProps) {
    return (
        <CardInputWrapper errorMessage={errorMessage}>
            <CardInfoInput
                value={value}
                setValue={setCVCNumber}
                size="large"
                placeHolder="123"
                inputBlock={isNumeric}
                setErrorMessage={setErrorMessage}
                isError={hasTouched && value.length !== 3}
                maxLength={3}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
        </CardInputWrapper>
    );
}
