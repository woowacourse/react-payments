import { useExecute } from '@/services/core/useExecute';

import { deleteCards } from '@/services/apis/cards/cards';

interface Options {
  onSuccess: () => void;
}

export const useDeleteCards = ({ onSuccess }: Options) => {
  // delete
  return useExecute({
    executeFn: deleteCards,
    onSuccess,
  });
};
