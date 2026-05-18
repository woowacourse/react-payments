import { getMyCards, type CardInfo } from '../apis/getMyCard';
import { useState } from 'react';
import { CardAPiServerError } from '../CardApiServerError';
import { deleteCard } from '../apis/deleteCard';

export const useMyCard = () => {
    const [myCards, setMyCards] = useState<CardInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchMyCards = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const data = await getMyCards();
            setMyCards(data);
        } catch (error) {
            if (error instanceof CardAPiServerError) {
                setIsError(true);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const deleteMyCard = async (id: string) => {
        await deleteCard(id);
        await fetchMyCards();
    };

    return { myCards, isLoading, isError, fetchMyCards, deleteMyCard };
};
