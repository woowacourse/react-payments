import { isNumeric } from '../../utils/isNumeric';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';

interface PasswordInputWrapperProps {
    setPassword: (value: string) => void;
    value: string;
    handleBlur: () => void;
    handleFocus: () => void;
    errorMessage: string | null;
    setErrorMessage: (errorMessage: string | null) => void;
    hasTouched: boolean;
}

export default function PasswordInputWrapper({
    setPassword,
    value,
    handleBlur,
    handleFocus,
    errorMessage,
    setErrorMessage,
    hasTouched,
}: PasswordInputWrapperProps) {
    return (
        <CardInputWrapper errorMessage={errorMessage}>
            <CardInfoInput
                value={value}
                setValue={setPassword}
                isError={hasTouched && value.length !== 2}
                setErrorMessage={setErrorMessage}
                inputBlock={isNumeric}
                size="large"
                maxLength={2}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder=""
            />
        </CardInputWrapper>
    );
}
