import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardAPiServerError } from '../CardApiServerError';
import { BRAND_VALUE_TO_ISSUER_CODE } from '../constants/BRAND_SELECT_OPTIONS';
import type { CardBrandValue } from '../types/CardBrandValue';
import type { CardAddCompleteState } from '../types/CardAddCompleteState';
import { createCard } from '../apis/client/createCard';

export type CardServerError = { code: string; message: string };

interface UseCardSubmitProps {
    cardNumberValues: string[];
    expValues: string[];
    cvcValues: string[];
    cardBrand: CardBrandValue;
}

export const useCardSubmit = ({ cardNumberValues, expValues, cvcValues, cardBrand }: UseCardSubmitProps) => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<CardServerError | null>(null);

    const handleSubmit = async () => {
        setServerError(null);

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
            setServerError({ code: error.code, message: error.message });
        }
    };

    return { serverError, handleSubmit };
};
