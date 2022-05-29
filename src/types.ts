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

export type CardData = {};
