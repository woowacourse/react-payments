import { useLoadData } from '@/services/core/useLoadData';

import { getCards } from '@/services/apis/cards/cards';
import { mapCardsResponseDTOToModel } from '@/services/apis/cards/mapper';
import type { Card } from '@/pages/payments/cards/list/model';

export const useCards = () => {
  const { status, refetch } = useLoadData<Card[]>({
    queryFn: async () => {
      const data = await getCards();
      return mapCardsResponseDTOToModel(data);
    },
  });

  return { status, refetch };
};
