import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router';
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
import type { CardAddCompleteState } from '../types/CardAddCompleteState';
import ConfirmButton from '../components/ConfirmButton';
import { createCard } from '../apis/createCard';
import { CardAPiServerError } from '../CardApiServerError';
import { BRAND_VALUE_TO_ISSUER_CODE } from '../constants/BRAND_SELECT_OPTIONS';

export default function CardAddPage() {
    const navigate = useNavigate();

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

    const [cardNumberServerError, setCardNumberServerError] = useState<string | null>(null);
    const [expServerError, setExpServerError] = useState<string | null>(null);
    const [cvcServerError, setCvcServerError] = useState<string | null>(null);

    const isCardBrandSatisfy = !!cardBrand;
    const isAllSatisfy = isCardNumberSatisfy && isCardBrandSatisfy && isExpSatisfy && isCVCSatisfy && isPasswordSatisfy;

    const handleSubmit = async () => {
        setCardNumberServerError(null);
        setExpServerError(null);
        setCvcServerError(null);

        try {
            await createCard({
                number: cardNumberValues.join(''),
                expirationDate: `${expValues[0]}/${expValues[1]}`,
                cvc: cvcValues[0],
                issuerCode: BRAND_VALUE_TO_ISSUER_CODE[cardBrand],
            });
            const state: CardAddCompleteState = { cardNumberPrefix: cardNumberValues[0], cardBrand };
            navigate('/complete', { state });
        } catch (error) {
            if (!(error instanceof CardAPiServerError)) return;
            if (error.code === 'INVALID_CARD_NUMBER') setCardNumberServerError(error.message);
            else if (error.code === 'INVALID_EXPIRATION_DATE') setExpServerError(error.message);
            else if (error.code === 'INVALID_CVC') setCvcServerError(error.message);
        }
    };

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
                {isAllSatisfy && <ConfirmButtonSpacer />}
            </InputSectionContainer>
            {isAllSatisfy && (
                <ConfirmButtonContainer>
                    <ConfirmButton purpose="submit" onClick={handleSubmit} />
                </ConfirmButtonContainer>
            )}
        </MainContainer>
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
