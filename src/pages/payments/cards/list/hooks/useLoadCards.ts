import { useLoadData } from '@/services/core/useLoadData';

import repository from '@/services/apis/cards/repository';

import type { Card } from '@/pages/payments/cards/list/model';

export const useLoadCards = () => {
  // read
  return useLoadData<Card[]>({
    queryFn: repository.getCards,
  });
};
