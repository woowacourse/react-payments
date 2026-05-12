import styled from '@emotion/styled';
import { useState } from 'react';
import { getCardNumberErrorMessage } from '../utils/getCardNumberErrorMessage';
import { getCVCumberErrorMessage } from '../utils/getCVCNumberErrorMessage';
import { getEXPNumberErrorMessage } from '../utils/getEXPNumberErrorMessage';
import CardPreview from '../components/Card/CardPreview';
import CardNumberInputWrapper from '../components/InputWrapper/CardNumberInputWrapper';
import EXPInputWrapper from '../components/InputWrapper/EXPInputWrapper';
import CVCInputWrapper from '../components/InputWrapper/CVCInputWrapper';
import { useCardInfoInputField } from '../hooks/useCardInfoInputField';
import PasswordInputWrapper from '../components/InputWrapper/PasswordInputWrapper';
import CardBrandInputWrapper from '../components/InputWrapper/CardBrandInputWrapper';
import { getPasswordErrorMessage } from '../utils/getPasswordErrorMessage';
import { getCardNumberMaxLengths } from '../utils/getCardNumberMaxLengths';
import { isFilledNumeric } from '../utils/isFilledNumeric';
import type { CardBrandValue } from '../types/CardBrandValue';
import type { CardAddCompleteState } from '../types/CardAddCompleteState';
import ConfirmButton from '../components/ConfirmButton';

export default function CardAddPage() {
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
    } = useCardInfoInputField({
        validator: getCardNumberErrorMessage,
        fieldCount: 4,
        isFilled: (value, index) => isFilledNumeric(value, getCardNumberMaxLengths(cardNumberValues[0])[index]),
    });

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
    } = useCardInfoInputField({ validator: getEXPNumberErrorMessage, fieldCount: 2, isFilled: (value) => isFilledNumeric(value, 2) });

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
        isFilled: (value) => isFilledNumeric(value, 3),
    });

    const {
        values: passwordValues,
        setValueByIndex: setPasswordValueByIndex,
        errorMessage: passwordErrorMessage,
        setErrorMessage: setPasswordErrorMessage,
        hasTouched: hasPasswordTouched,
        handleBlur: handlePasswordBlur,
        handleFocus: handlePasswordFocus,
        isSatisfy: isPasswordSatisfy,
        getRef: getPasswordRef,
        focusFirst: focusFirstPassword,
    } = useCardInfoInputField({
        validator: (value) => getPasswordErrorMessage(value[0]),
        fieldCount: 1,
        isFilled: (value) => isFilledNumeric(value, 2),
    });

    const isCardBrandSatisfy = !!cardBrand;
    const isAllSatisfy = isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy && isCVCSatisfy && isPasswordSatisfy;

    return (
        <>
            <MainContainer>
                <CardPreview cardNumbers={cardNumberValues} EXP={expValues} cardIssuer={cardBrand} />
                <InputSectionContainer>
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
                        isRender={isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy && isCVCSatisfy}
                    />
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
                        isRender={isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy}
                    />
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
                        isRender={isCardNumberSatisfy && isCardBrandSatisfy}
                    />
                    <CardBrandInputWrapper
                        selectedValue={cardBrand}
                        setSelectedValue={setCardBrand}
                        isRender={isCardNumberSatisfy}
                    />
                    <CardNumberInputWrapper
                        setCardNumber={setCardNumberValueByIndex}
                        value={cardNumberValues}
                        handleBlur={handleCardNumberBlur}
                        handleFocus={handleCardNumberFocus}
                        errorMessage={cardNumberErrorMessage}
                        setErrorMessage={setCardNumberErrorMessage}
                        hasTouched={hasCardNumberTouched}
                        getRef={getCardNumberRef}
                        maxLengths={getCardNumberMaxLengths(cardNumberValues[0])}
                    />
                    {isAllSatisfy && <ConfirmButtonSpacer />}
                </InputSectionContainer>
                {isAllSatisfy && (
                    <ConfirmButtonContainer>
                        <ConfirmButton<CardAddCompleteState>
                            to="/complete"
                            purpose="submit"
                            state={{ cardNumberPrefix: cardNumberValues[0], cardBrand }}
                        />
                    </ConfirmButtonContainer>
                )}
            </MainContainer>
        </>
    );
}

const InputSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    max-height: 60vh;
`;

const ConfirmButtonSpacer = styled.div`
    height: 44px;
    flex-shrink: 0;
`;

const MainContainer = styled.main`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    top: 77px;
    left: 50%;
    transform: translateX(-50%);
    width: 375px;
`;

const ConfirmButtonContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 375px;
`;
