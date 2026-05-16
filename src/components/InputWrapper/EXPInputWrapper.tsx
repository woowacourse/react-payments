import { useEffect } from 'react';
import { isMonthMatch } from '../../utils/isMonthMatch';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';
import CardInfoSection from '../CardInfoSection';
import { useFieldInputState } from '../../hooks/useFieldInputState';
import { getEXPNumberErrorMessage } from '../../utils/getEXPNumberErrorMessage';
import { isFilledNumeric } from '../../utils/isFilledNumeric';

interface EXPInputWrapperProps {
    setValue: (index: number) => (value: string) => void;
    value: string[];
    isRender?: boolean;
}

export default function EXPInputWrapper({ setValue, value, isRender }: EXPInputWrapperProps) {
    const { errorMessage, setErrorMessage, hasTouched, handleBlur, handleFocus, getRef, focusFirst, handleChange } =
        useFieldInputState({
            values: value,
            setValue,
            validator: getEXPNumberErrorMessage,
            isFilled: (v) => isFilledNumeric(v, 2),
            fieldCount: 2,
        });

    useEffect(() => {
        focusFirst();
    }, []);

    return (
        <CardInfoSection
            title="카드 유효기간을 입력해 주세요"
            caption="월/년도(MMYY)를 순서대로 입력해 주세요"
            inputLabel="유효기간"
            isRender={isRender}
        >
            <CardInputWrapper errorMessage={errorMessage}>
                <CardInfoInput
                    ref={getRef(0)}
                    value={value[0]}
                    setValue={handleChange(0)}
                    size="medium"
                    placeholder="MM"
                    inputBlock={isMonthMatch}
                    setErrorMessage={setErrorMessage}
                    isError={hasTouched && value[0].length !== 2}
                    maxLength={2}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
                <CardInfoInput
                    ref={getRef(1)}
                    value={value[1]}
                    setValue={handleChange(1)}
                    size="medium"
                    placeholder="YY"
                    inputBlock={isNumeric}
                    setErrorMessage={setErrorMessage}
                    isError={hasTouched && value[1].length !== 2}
                    maxLength={2}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
            </CardInputWrapper>
        </CardInfoSection>
    );
}
