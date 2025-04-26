import { useMultipleInputFields } from '../../hooks/useCardInputHooks';
import { isValidExpirationSegment } from '../../utils/cardValidation';
import ExpirationPeriodInputsView from './ExpirationPeriodInputsView';

interface ExpirationPeriodInputsProps {
  handlePeriodChange: (newPeriod: string[]) => void;
  showPeriodSeparator: (e: React.FocusEvent<HTMLInputElement>) => void;
  hidePeriodSeparator: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const EXPIRY_DATE_MAX_LENGTH = 2;

const ExpirationPeriodInputs = ({
  handlePeriodChange,
  showPeriodSeparator,
  hidePeriodSeparator,
}: ExpirationPeriodInputsProps) => {
  const initialExpiryDate = ['', ''];
  const placeholders = ['MM', 'YY'];

  const [expiryDateInfo, handleFieldChange] = useMultipleInputFields(
    initialExpiryDate,
    placeholders,
    EXPIRY_DATE_MAX_LENGTH,
    isValidExpirationSegment,
    handlePeriodChange
  );

  return (
    <ExpirationPeriodInputsView
      expiryDateInfo={expiryDateInfo}
      handleInputChange={handleFieldChange}
      onFocus={showPeriodSeparator}
      onBlur={hidePeriodSeparator}
    />
  );
};

export default ExpirationPeriodInputs;
