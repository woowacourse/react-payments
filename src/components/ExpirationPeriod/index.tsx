import ExpirationPeriodView from './ExpirationPeriodView';
import { useExpirationPeriod } from '../../hooks/useExpirationPeriod';

export interface ExpirationPeriodProps {
  period: { month: string; year: string };
  setPeriod: React.Dispatch<
    React.SetStateAction<{ month: string; year: string }>
  >;
  separatorRef?: React.RefObject<HTMLDivElement | null>;
  onComplete?: () => void;
  setExpirationPeriodError: React.Dispatch<React.SetStateAction<boolean>>;
}

const SEPARATOR = '/';

const ExpirationPeriod = ({
  period,
  setPeriod,
  separatorRef,
  onComplete,
  setExpirationPeriodError,
}: ExpirationPeriodProps) => {
  const { errorMessage, errors, handleInputChange } = useExpirationPeriod({
    period,
    setPeriod,
    separatorRef,
    setExpirationPeriodError,
  });

  const handleFocus = () => {
    if (separatorRef?.current) {
      separatorRef.current.textContent = SEPARATOR;
    }
  };

  const handleBlur = () => {
    if (separatorRef?.current && period.month === '' && period.year === '') {
      separatorRef.current.textContent = '';
    }
  };

  return (
    <ExpirationPeriodView
      period={period}
      errorMessage={errorMessage}
      errors={errors}
      handleInputChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onComplete={onComplete}
    />
  );
};

export default ExpirationPeriod;
