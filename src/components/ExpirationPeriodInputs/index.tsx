import { useState, useEffect } from 'react';
import { isValidExpirationSegment } from '../../utils/cardValidation';
import ExpirationPeriodInputsView from './ExpirationPeriodInputsView';
import { ExpirationPeriodInfo } from '../../types/models';

interface ExpirationPeriodInputsProps {
  period: string[];
  handlePeriodChange: (newPeriod: string[]) => void;
  showPeriodSeparator: (e: React.FocusEvent<HTMLInputElement>) => void;
  hidePeriodSeparator: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const EXPIRATION_PERIOD_LENGTH = 2;

const ExpirationPeriodInputs = ({
  period,
  handlePeriodChange,
  showPeriodSeparator,
  hidePeriodSeparator,
}: ExpirationPeriodInputsProps) => {
  const [expiryDateInfo, setExpiryDateInfo] = useState<ExpirationPeriodInfo[]>(
    period.map((num, idx) => ({
      number: num,
      isError: false,
      placeholder: idx === 0 ? 'MM' : 'YY',
      numberSegmentLength: EXPIRATION_PERIOD_LENGTH,
      errorMessage: '',
    }))
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const { valid, errorMessage } = isValidExpirationSegment(
      value,
      index,
      EXPIRATION_PERIOD_LENGTH
    );

    setExpiryDateInfo((prev) =>
      prev.map((info, i) =>
        i === index
          ? {
              ...info,
              number: valid ? value : info.number,
              isError: !valid,
              errorMessage: errorMessage,
            }
          : info
      )
    );
  };

  useEffect(() => {
    handlePeriodChange(expiryDateInfo.map((info) => info.number));
  }, [expiryDateInfo]);

  return (
    <ExpirationPeriodInputsView
      expiryDateInfo={expiryDateInfo}
      handleInputChange={handleInputChange}
      onFocus={showPeriodSeparator}
      onBlur={hidePeriodSeparator}
    />
  );
};

export default ExpirationPeriodInputs;
