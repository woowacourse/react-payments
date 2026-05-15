import { useEffect } from 'react';
import { isNumeric } from '../../utils/isNumeric';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import CardInfoSection from '../CardInfoSection';
import { useFieldInputState } from '../../hooks/useFieldInputState';
import { getPasswordErrorMessage } from '../../utils/getPasswordErrorMessage';
import { isFilledNumeric } from '../../utils/isFilledNumeric';

interface PasswordInputWrapperProps {
    setValue: (index: number) => (value: string) => void;
    value: string;
    isRender?: boolean;
}

export default function PasswordInputWrapper({ setValue, value, isRender }: PasswordInputWrapperProps) {
    const { errorMessage, setErrorMessage, hasTouched, handleBlur, handleFocus, getRef, focusFirst, handleChange } =
        useFieldInputState({
            values: [value],
            setValue,
            validator: (values) => getPasswordErrorMessage(values[0]),
            isFilled: (v) => isFilledNumeric(v, 2),
            fieldCount: 1,
        });

    useEffect(() => {
        focusFirst();
    }, []);

    return (
        <CardInfoSection
            title="비밀번호"
            caption="앞의 2자리를 입력해 주세요"
            inputLabel="비밀번호 앞 2자리"
            isRender={isRender}
        >
            <CardInputWrapper errorMessage={errorMessage}>
                <CardInfoInput
                    ref={getRef(0)}
                    value={value}
                    setValue={handleChange(0)}
                    isError={hasTouched && value.length !== 2}
                    setErrorMessage={setErrorMessage}
                    inputBlock={isNumeric}
                    size="large"
                    maxLength={2}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder=""
                    type="password"
                />
            </CardInputWrapper>
        </CardInfoSection>
    );
}
