import { requestAjax } from '@/services/core/http';

import type { PostCardsRequestDTO, PostCardsResponseDTO, DeleteCardsRequestDTO } from './dto';

export const getCards = async () => {
  const response = await requestAjax('/cards');
  return response.data;
};

export const postCards = async ({
  number,
  expirationDate,
  cvc,
  issuerCode,
}: PostCardsRequestDTO): Promise<PostCardsResponseDTO> => {
  const response = await requestAjax('/cards', {
    method: 'post',
    data: {
      number,
      expirationDate,
      cvc,
      issuerCode,
    },
  });
  return response.data;
};

export const deleteCards = async ({ id }: DeleteCardsRequestDTO) => {
  return await requestAjax(`/cards`, {
    method: 'delete',
    pathParams: { id },
  });
};
