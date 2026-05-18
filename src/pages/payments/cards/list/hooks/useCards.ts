import { useLoadData } from '@/services/core/useLoadData';
import { useExecute } from '@/services/core/useExecute';

import { getCards } from '@/services/apis/cards/cards';
import { deleteCards } from '@/services/apis/cards/cards';

import { mapCardsResponseDTOToModel } from '@/services/apis/cards/mapper';
import type { Card } from '@/pages/payments/cards/list/model';

export const useCards = () => {
  // read
  const { status, refetch } = useLoadData<Card[]>({
    queryFn: async () => {
      const data = await getCards();
      return mapCardsResponseDTOToModel(data);
    },
  });

  // delete
  const { mutate } = useExecute({
    executeFn: deleteCards,
    onSuccess: () => {
      refetch();
    },
  });

  return { status, deleteCard: mutate };
};
