import styled from '@emotion/styled';
import { useState } from 'react';
import { getCardNumberErrorMessage } from './utils/getCardNumberErrorMessage';
import CardInfoSection from './components/CardInfoSection';
import { getCVCumberErrorMessage } from './utils/getCVCNumberErrorMessage';
import { getEXPNumberErrorMessage } from './utils/getEXPNumberErrorMessage';
import CardPreview from './components/Card/CardPreview';
import CardNumberInputWrapper from './components/InputWrapper/CardNumberInputWrapper';
import EXPInputWrapper from './components/InputWrapper/EXPInputWrapper';
import CVCInputWrapper from './components/InputWrapper/CVCInputWrapper';
import { useCardInfoInputField } from './hooks/useCardInfoInputField';
import PasswordInputWrapper from './components/InputWrapper/PasswordInputWrapper';
import CardBrandInputWrapper from './components/InputWrapper/CardBrandInputWrapper';
import type { CardBrandValue } from './hooks/useCardInfoValue';
import { getPasswordErrorMessage } from './utils/getPasswordErrorMessage';
import { isEachCardNumber } from './utils/isEachCardNumber';
import { isCVCInputFilled } from './utils/isCVCInputFilled';
import { isPasswordInputFilled } from './utils/isPasswordInputFilled';
import { isEXPNumber } from './utils/isEXPNumber';

function App() {
    const {
        values: cardNumberValues,
        setValueByIndex: setCardNumberValueByIndex,
        errorMessage: cardNumberErrorMessage,
        setErrorMessage: setCardNumberErrorMessage,
        hasTouched: hasCardNumberTouched,
        handleBlur: handleCardNumberBlur,
        handleFocus: handleCardNumberFocus,
        isSatisfy: isCardNumberSatisfy,
        getRef: getCardNumberRef,
    } = useCardInfoInputField({ validator: getCardNumberErrorMessage, fieldCount: 4, isFilled: isEachCardNumber });

    const [cardBrand, setCardBrand] = useState<CardBrandValue>('');

    const {
        values: expValues,
        setValueByIndex: setExpValueByIndex,
        errorMessage: expErrorMessage,
        setErrorMessage: setExpErrorMessage,
        hasTouched: hasExpTouched,
        handleBlur: handleExpBlur,
        handleFocus: handleExpFocus,
        isSatisfy: isExpSatisfy,
        getRef: getExpRef,
        focusFirst: focusFirstExp,
    } = useCardInfoInputField({ validator: getEXPNumberErrorMessage, fieldCount: 2, isFilled: isEXPNumber });

    const {
        values: cvcValues,
        setValueByIndex: setCVCValueByIndex,
        errorMessage: cvcErrorMessage,
        setErrorMessage: setCVCErrorMessage,
        hasTouched: hasCVCTouched,
        handleBlur: handleCVCBlur,
        handleFocus: handleCVCFocus,
        isSatisfy: isCVCSatisfy,
        getRef: getCVCRef,
        focusFirst: focusFirstCVC,
    } = useCardInfoInputField({
        validator: (values) => getCVCumberErrorMessage(values[0]),
        fieldCount: 1,
        isFilled: isCVCInputFilled,
    });

    const {
        values: passwordValues,
        setValueByIndex: setPasswordValueByIndex,
        errorMessage: passwordErrorMessage,
        setErrorMessage: setPasswordErrorMessage,
        hasTouched: hasPasswordTouched,
        handleBlur: handlePasswordBlur,
        handleFocus: handlePasswordFocus,
        getRef: getPasswordRef,
        focusFirst: focusFirstPassword,
    } = useCardInfoInputField({
        validator: (value) => getPasswordErrorMessage(value[0]),
        fieldCount: 1,
        isFilled: isPasswordInputFilled,
    });

    const isCardBrandSatisfy = !!cardBrand;

    return (
        <MainContainer>
            <CardPreview cardNumbers={cardNumberValues} EXP={expValues} />
            <InputSectionContainer>
                <CardInfoSection
                    title="비밀번호"
                    caption="앞의 2자리를 입력해 주세요"
                    inputLabel="비밀번호 앞 2자리"
                    isRender={isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy && isCVCSatisfy}
                >
                    <PasswordInputWrapper
                        setPassword={setPasswordValueByIndex(0)}
                        value={passwordValues[0]}
                        handleBlur={handlePasswordBlur}
                        handleFocus={handlePasswordFocus}
                        errorMessage={passwordErrorMessage}
                        setErrorMessage={setPasswordErrorMessage}
                        hasTouched={hasPasswordTouched}
                        getRef={getPasswordRef}
                        focusFirst={focusFirstPassword}
                    />
                </CardInfoSection>
                <CardInfoSection
                    title="CVC 번호를 입력해 주세요"
                    inputLabel="CVC"
                    isRender={isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy}
                >
                    <CVCInputWrapper
                        setCVCNumber={setCVCValueByIndex(0)}
                        value={cvcValues[0]}
                        handleBlur={handleCVCBlur}
                        handleFocus={handleCVCFocus}
                        errorMessage={cvcErrorMessage}
                        setErrorMessage={setCVCErrorMessage}
                        hasTouched={hasCVCTouched}
                        getRef={getCVCRef}
                        focusFirst={focusFirstCVC}
                    />
                </CardInfoSection>
                <CardInfoSection
                    title="카드 유효기간을 입력해 주세요"
                    caption="월/년도(MMYY)를 순서대로 입력해 주세요"
                    inputLabel="유효기간"
                    isRender={isCardNumberSatisfy && isCardBrandSatisfy}
                >
                    <EXPInputWrapper
                        setEXPNumber={setExpValueByIndex}
                        value={expValues}
                        handleBlur={handleExpBlur}
                        handleFocus={handleExpFocus}
                        errorMessage={expErrorMessage}
                        setErrorMessage={setExpErrorMessage}
                        hasTouched={hasExpTouched}
                        getRef={getExpRef}
                        focusFirst={focusFirstExp}
                    />
                </CardInfoSection>
                <CardInfoSection
                    title="카드사를 선택해 주세요"
                    caption="현재 국내 카드사만 가능합니다."
                    isRender={isCardNumberSatisfy}
                >
                    <CardBrandInputWrapper selectedValue={cardBrand} setSelectedValue={setCardBrand} />
                </CardInfoSection>
                <CardInfoSection
                    title="결제할 카드 번호를 입력해 주세요"
                    caption="본인 명의의 카드만 결제 가능합니다."
                    inputLabel="카드 번호"
                >
                    <CardNumberInputWrapper
                        setCardNumber={setCardNumberValueByIndex}
                        value={cardNumberValues}
                        handleBlur={handleCardNumberBlur}
                        handleFocus={handleCardNumberFocus}
                        errorMessage={cardNumberErrorMessage}
                        setErrorMessage={setCardNumberErrorMessage}
                        hasTouched={hasCardNumberTouched}
                        getRef={getCardNumberRef}
                    />
                </CardInfoSection>
            </InputSectionContainer>
        </MainContainer>
    );
}

export default App;

const InputSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const MainContainer = styled.main`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
