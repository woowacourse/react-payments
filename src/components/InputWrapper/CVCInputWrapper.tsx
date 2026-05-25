import { useEffect } from 'react';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';
import CardInfoSection from '../CardInfoSection';
import { useFieldInputState } from '../../hooks/useFieldInputState';
import { getCVCumberErrorMessage } from '../../utils/getCVCNumberErrorMessage';
import { isFilledNumeric } from '../../utils/isFilledNumeric';
import { SERVER_ERROR_CODES } from '../../constants/SERVER_ERROR_CODES';
import type { CardServerError } from '../../hooks/useCardSubmit';

interface CVCInputWrapperProps {
    setValue: (index: number) => (value: string) => void;
    value: string;
    isRender?: boolean;
    serverError?: CardServerError | null;
}

export default function CVCInputWrapper({ setValue, value, isRender, serverError }: CVCInputWrapperProps) {
    const { errorMessage, setErrorMessage, hasTouched, handleBlur, handleFocus, getRef, focusFirst, focusWithError, handleChange } =
        useFieldInputState({
            values: [value],
            setValue,
            validator: (values) => getCVCumberErrorMessage(values[0]),
            isFilled: (v) => isFilledNumeric(v, 3),
            fieldCount: 1,
        });

    useEffect(() => {
        if (isRender) focusFirst();
    }, [isRender]);

    useEffect(() => {
        if (serverError?.code !== SERVER_ERROR_CODES.INVALID_CVC) return;
        focusWithError(serverError.message);
    }, [serverError]);

    return (
        <CardInfoSection title="CVC 번호를 입력해 주세요" inputLabel="CVC" isRender={isRender}>
            <CardInputWrapper errorMessage={errorMessage}>
                <CardInfoInput
                    ref={getRef(0)}
                    value={value}
                    setValue={handleChange(0)}
                    size="large"
                    placeholder="123"
                    inputBlock={isNumeric}
                    setErrorMessage={setErrorMessage}
                    isError={hasTouched && value.length !== 3}
                    maxLength={3}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
            </CardInputWrapper>
        </CardInfoSection>
    );
}
