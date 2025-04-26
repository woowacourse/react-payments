interface NumberInfo {
  number: string;
  isError: boolean;
  placeholder: string;
  numberSegmentLength: number;
}

interface CVCNumberInfo {
  number: string;
  isError: boolean;
  placeholder: string;
  numberSegmentLength: number;
}
interface PasswordInfo {
  number: string;
  isError: boolean;
  placeholder: string;
  numberSegmentLength: number;
}

interface ExpirationPeriodInfo {
  number: string;
  isError: boolean;
  placeholder: string;
  numberSegmentLength: number;
  errorMessage: string;
}

export type { NumberInfo, CVCNumberInfo, PasswordInfo, ExpirationPeriodInfo };
