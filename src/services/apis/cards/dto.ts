interface ApiErrorResponseDTO<TErrorCode extends string = string> {
  code: TErrorCode;
  message: string;
}

interface CardRseponseDTO {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export type GetCardsResponseDTO = CardRseponseDTO[];

export interface PostCardsRequestDTO {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export interface PostCardsResponseDTO {
  id: string;
}

export type PostCardsErrorCode = 'INVALID_CARD_NUMBER' | 'INVALID_CVC' | 'INVALID_EXPIRATION_DATE';

export type PostCardsErrorResponseDTO = ApiErrorResponseDTO<PostCardsErrorCode>;

export interface DeleteCardsRequestDTO {
  id: string;
}
