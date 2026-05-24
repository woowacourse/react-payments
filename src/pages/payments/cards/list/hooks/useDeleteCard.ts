import { useExecute } from '@/services/core/useExecute';

import repository from '@/services/apis/cards/repository';

interface Options {
  onSuccess: () => void;
}

export const useDeleteCards = ({ onSuccess }: Options) => {
  // delete
  return useExecute({
    executeFn: repository.deleteCards,
    onSuccess,
  });
};
