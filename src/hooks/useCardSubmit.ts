import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardAPiServerError } from '../CardApiServerError';
import { BRAND_VALUE_TO_ISSUER_CODE } from '../constants/BRAND_SELECT_OPTIONS';
import type { CardBrandValue } from '../types/CardBrandValue';
import type { CardAddCompleteState } from '../types/CardAddCompleteState';
import { createCard } from '../apis/client/createCard';

interface UseCardSubmitProps {
    cardNumberValues: string[];
    expValues: string[];
    cvcValues: string[];
    cardBrand: CardBrandValue;
}

export const useCardSubmit = ({ cardNumberValues, expValues, cvcValues, cardBrand }: UseCardSubmitProps) => {
    const navigate = useNavigate();
    const [cardNumberServerError, setCardNumberServerError] = useState<string | null>(null);
    const [expServerError, setExpServerError] = useState<string | null>(null);
    const [cvcServerError, setCvcServerError] = useState<string | null>(null);

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

    return { cardNumberServerError, expServerError, cvcServerError, handleSubmit };
};
