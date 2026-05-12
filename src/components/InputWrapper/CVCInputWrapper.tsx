import { useEffect } from 'react';
import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';
import CardInfoSection from '../CardInfoSection';

interface CVCInputWrapperProps {
    setCVCNumber: (value: string) => void;
    value: string;
    handleBlur: () => void;
    handleFocus: () => void;
    errorMessage: string | null;
    setErrorMessage: (errorMessage: string | null) => void;
    hasTouched: boolean;
    getRef: (index: number) => (el: HTMLInputElement | null) => void;
    focusFirst: () => void;
    isRender?: boolean;
}

export default function CVCInputWrapper({
    setCVCNumber,
    value,
    handleBlur,
    handleFocus,
    errorMessage,
    setErrorMessage,
    hasTouched,
    getRef,
    focusFirst,
    isRender,
}: CVCInputWrapperProps) {
    useEffect(() => {
        focusFirst();
    }, []);

    return (
        <CardInfoSection title="CVC 번호를 입력해 주세요" inputLabel="CVC" isRender={isRender}>
            <CardInputWrapper errorMessage={errorMessage}>
                <CardInfoInput
                    ref={getRef(0)}
                    value={value}
                    setValue={setCVCNumber}
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
