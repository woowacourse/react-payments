import * as React from 'react';

/* 상수 영역 */
export interface RequestStatus {
  SUCCESS: 0;
  FAIL: 1;
}

export type RequestResult = Pick<RequestStatus, 'SUCCESS'> | Pick<RequestStatus, 'FAIL'>;

export interface CardCompany {
  name: string;
  color: 'purple' | 'yellow' | 'sky' | 'white' | 'green' | 'orange' | 'blue' | 'yellow';
  icon: string;
}

export type CardCompanyList = Record<number, CardCompany>;

export type ModalState = 'hidden' | 'visible' | 'disappear';

export interface CardData {
  id?: number;
  cardName?: string;
  companyId: number;
  cardNumber: [number];
  expireMount: number;
  expireYear: number;
  userName: string;
  securityCode: number;
  cardPassword: number;
}

export type CardList = Array<CardData>;

export type CardDataContextAction = 'PRELOAD' | 'INSERT' | 'UPDATE' | 'DELETE';

export interface CardDataContextDispatch {
  type: CardDataContextAction;
  data: {
    index?: number;
    cardData?: CardData;
  };
}

export interface CardDataContextState {
  state: {
    cardList: CardList;
    currentEditIndex: number;
  };
  action: {
    dispatch: React.Dispatch<CardDataContextDispatch>;
    setEditIndex: React.Dispatch<React.SetStateAction<number>>;
  };
}
