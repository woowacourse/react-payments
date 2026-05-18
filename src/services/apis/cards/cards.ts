import type { PostCardsRequestDTO, PostCardsResponseDTO, DeleteCardsRequestDTO } from './dto';

export const getCards = async () => {
  return await fetch('/cards').then((res) => res.json());
};

export const postCards = async ({
  number,
  expirationDate,
  cvc,
  issuerCode,
}: PostCardsRequestDTO): Promise<PostCardsResponseDTO> => {
  const response = await fetch('/cards', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      number,
      expirationDate,
      cvc,
      issuerCode,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw data;
};

export const deleteCards = async ({ id }: DeleteCardsRequestDTO) => {
  return await fetch(`/cards/${id}`, {
    method: 'delete',
  });
};
