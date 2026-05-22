import { useCallback, useEffect, useState } from 'react';
import { CardAPiServerError } from '../CardApiServerError';
import type { CardInfo } from '../types/CardListItemDTO';
import { getMyCards } from '../apis/client/getMyCard';
import { deleteCard } from '../apis/client/deleteCard';

export const useMyCard = () => {
    const [myCards, setMyCards] = useState<CardInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // TODO callback 지워도 됨!
    const fetchMyCards = useCallback(async () => {
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
    }, []);

    const deleteMyCard = async (id: string) => {
        await deleteCard(id);
        await fetchMyCards();
    };

    useEffect(() => {
        // useEffect 내부의 함수에서 setState를 호출하면 리렌더링 유발 -> 함수 새롭게 생성 -> 의존성 배열에 참조된 함수 변경 -> useEffect 재실행 -> 리렌더링 유발 ..의 사이클을 막기 위해서 React에서 경고 출력
        // fetchMyCards를 useCallback으로 감싸서 같은 참조를 반환하도록 하였음에돌 경고가 없어지지 않아 린트 무시 주석을 추가했습니다.
        // 함수를 내부에서 직접 선언하여 해결할 수도 있었지만 deleteMyCard에서도 fetchMyCards를 호출하기 때문에 불필요한 중복을 만드는 것 보다는 해결된 상황에서 없어지지 않는 경고를 무시하는 편이 더욱 나은 판단이라고 생각했습니다.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchMyCards();
    }, []);

    return { myCards, isLoading, isError, deleteMyCard };
};
