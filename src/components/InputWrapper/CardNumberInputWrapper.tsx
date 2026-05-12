import CardInfoInput from '../Input/CardInfoInput';
import CardInputWrapper from './CardInputWrapper';
import { isNumeric } from '../../utils/isNumeric';
import CardInfoSection from '../CardInfoSection';

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
        </CardInfoSection>
    );
}
