import { useEffect } from 'react';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';
import CardInfoSection from '../CardInfoSection';
import { useFieldInputState } from '../../hooks/useFieldInputState';
import { getCardNumberErrorMessage } from '../../utils/getCardNumberErrorMessage';
import { getCardNumberMaxLengths } from '../../utils/getCardNumberMaxLengths';
import { isFilledNumeric } from '../../utils/isFilledNumeric';
import { SERVER_ERROR_CODES } from '../../constants/SERVER_ERROR_CODES';
import type { CardServerError } from '../../hooks/useCardSubmit';

interface CardNumberInputWrapperProps {
    setValue: (index: number) => (value: string) => void;
    value: string[];
    serverError?: CardServerError | null;
}

export default function CardNumberInputWrapper({ setValue, value, serverError }: CardNumberInputWrapperProps) {
    const maxLengths = getCardNumberMaxLengths(value[0]);

    const { errorMessage, setErrorMessage, hasTouched, handleBlur, handleFocus, getRef, focusWithError, handleChange } =
        useFieldInputState({
            values: value,
            setValue,
            validator: getCardNumberErrorMessage,
            isFilled: (v, index) => isFilledNumeric(v, getCardNumberMaxLengths(value[0])[index]),
            fieldCount: 4,
        });

    useEffect(() => {
        if (serverError?.code !== SERVER_ERROR_CODES.INVALID_CARD_NUMBER) return;
        focusWithError(serverError.message);
    }, [serverError, focusWithError]);

    return (
        <CardInfoSection
            title="결제할 카드 번호를 입력해 주세요"
            caption="본인 명의의 카드만 결제 가능합니다."
            inputLabel="카드 번호"
        >
            <CardInputWrapper errorMessage={errorMessage}>
                {maxLengths.map((maxLength, index) => (
                    <CardInfoInput
                        key={`${index}th-input`}
                        ref={getRef(index)}
                        value={value[index]}
                        setValue={handleChange(index)}
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
        </CardInfoSection>
    );
}
