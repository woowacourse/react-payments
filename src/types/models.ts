export interface NumberInfo {
  number: string;
  isError: boolean;
  placeholder: string;
  numberSegmentLength: number;
}

export interface CVCNumberInfo {
  number: string;
  isError: boolean;
  placeholder: string;
  numberSegmentLength: number;
}

export interface ExpirationPeriodInfo {
  number: string;
  isError: boolean;
  placeholder: string;
  numberSegmentLength: number;
  errorMessage: string;
}
