import type { DeleteCardsRequestDTO } from './dto';

export const getCards = async () => {
  return await fetch('/cards').then((res) => res.json());
};

export const deleteCards = async ({ id }: DeleteCardsRequestDTO) => {
  return await fetch(`/cards/${id}`, {
    method: 'delete',
  });
};
