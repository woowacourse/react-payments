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
import type { CardBrandValue } from '../types/CardBrandValue';
import ConfirmButton from '../components/ConfirmButton';
import { useCardSubmit } from '../hooks/useCardSubmit';

export default function CardAddPage() {
    const {
        values: cardNumberValues,
        setValue: setCardNumberValue,
        isSatisfy: isCardNumberSatisfy,
    } = useCardInfoInputField({ validator: getCardNumberErrorMessage, fieldCount: 4 });

    const [cardBrand, setCardBrand] = useState<CardBrandValue>('');

    const {
        values: expValues,
        setValue: setExpValue,
        isSatisfy: isExpSatisfy,
    } = useCardInfoInputField({
        validator: getEXPNumberErrorMessage,
        fieldCount: 2,
    });

    const {
        values: cvcValues,
        setValue: setCVCValue,
        isSatisfy: isCVCSatisfy,
    } = useCardInfoInputField({
        validator: (values) => getCVCumberErrorMessage(values[0]),
        fieldCount: 1,
    });

    const {
        values: passwordValues,
        setValue: setPasswordValue,
        isSatisfy: isPasswordSatisfy,
    } = useCardInfoInputField({
        validator: (values) => getPasswordErrorMessage(values[0]),
        fieldCount: 1,
    });

    const { cardNumberServerError, expServerError, cvcServerError, handleSubmit } = useCardSubmit({
        cardNumberValues,
        expValues,
        cvcValues,
        cardBrand,
    });

    const isCardBrandSatisfy = !!cardBrand;
    const isAllSatisfy = isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy && isCVCSatisfy && isPasswordSatisfy;

    return (
        <MainContainer>
            <CardPreview cardNumbers={cardNumberValues} EXP={expValues} cardIssuer={cardBrand} />
            <InputSectionContainer>
                <PasswordInputWrapper
                    setValue={setPasswordValue}
                    value={passwordValues[0]}
                    isRender={isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy && isCVCSatisfy}
                />
                <CVCInputWrapper
                    setValue={setCVCValue}
                    value={cvcValues[0]}
                    isRender={isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy}
                    serverError={cvcServerError}
                />
                <EXPInputWrapper
                    setValue={setExpValue}
                    value={expValues}
                    isRender={isCardNumberSatisfy && isCardBrandSatisfy}
                    serverError={expServerError}
                />
                <CardBrandInputWrapper
                    selectedValue={cardBrand}
                    setSelectedValue={setCardBrand}
                    isRender={isCardNumberSatisfy}
                />
                <CardNumberInputWrapper
                    setValue={setCardNumberValue}
                    value={cardNumberValues}
                    serverError={cardNumberServerError}
                />
            </InputSectionContainer>
            {isAllSatisfy && (
                <ConfirmButtonContainer>
                    <ConfirmButton purpose="submit" onClick={handleSubmit} />
                </ConfirmButtonContainer>
            )}
        </MainContainer>
    );
}

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    min-height: 0;
    padding-top: 77px;
    overflow: hidden;
`;

const InputSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
    width: 100%;
    margin-top: 45px;
    padding: 0 16px 16px;
    box-sizing: border-box;
`;

const ConfirmButtonContainer = styled.div`
    flex-shrink: 0;
    width: 100%;
`;
