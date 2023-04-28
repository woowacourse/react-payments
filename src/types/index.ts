export interface CardType {
  cardNumber: string;
  expiredDate: string;
  ownerName: string;
  cvc: string;
  password: string[];
  color: string;
  bankName: string;
  cardName?: string;
}

export interface modalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}