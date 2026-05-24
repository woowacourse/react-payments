import { useLoadCards } from './useLoadCards';
import { useDeleteCards } from './useDeleteCard';

export const useCards = () => {
  // read
  const { status, refetch } = useLoadCards();

  // delete
  const { mutate } = useDeleteCards({ onSuccess: refetch });

  return { status, loadCard: refetch, deleteCard: mutate };
};
