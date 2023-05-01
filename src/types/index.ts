import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CardNumber {
  [key: string]: string;
  number1: string;
  number2: string;
  number3: string;
  number4: string;
}

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface PreviewCardInfo extends ExpirationDate, CardNumber {
  cardCompany: string;
  name: string;
}

export interface Password {
  [key: string]: string;
  password1: string;
  password2: string;
}

export interface CardInfo extends PreviewCardInfo, Password {
  code: string;
}

type SetCardInfo = Dispatch<SetStateAction<CardInfo>>;
export interface CardInfoState {
  cardInfo: CardInfo;
  setCardInfo: SetCardInfo;
}

type SetModalState = Dispatch<SetStateAction<boolean>>;
export interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: SetModalState;
}

export interface ProviderChildren {
  children: ReactNode;
}
