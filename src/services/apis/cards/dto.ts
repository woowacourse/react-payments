interface CardRseponseDTO {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export type GetCardsResponseDTO = CardRseponseDTO[];
