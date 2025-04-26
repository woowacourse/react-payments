import { useMultipleInputFields } from '../../hooks/useCardInputHooks';
import { isValidExpirationSegment } from '../../utils/cardValidation';
import ExpirationPeriodInputsView from './ExpirationPeriodInputsView';

interface ExpirationPeriodInputsProps {
  period: string[];
  handlePeriodChange: (newPeriod: string[]) => void;
  showPeriodSeparator: (e: React.FocusEvent<HTMLInputElement>) => void;
  hidePeriodSeparator: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const ExpirationPeriodInputs = ({
  period,
  handlePeriodChange,
  showPeriodSeparator,
  hidePeriodSeparator,
}: ExpirationPeriodInputsProps) => {
  const placeholders = ['MM', 'YY'];

  const [fieldStates, handleFieldChange] = useMultipleInputFields(
    period,
    placeholders,
    2,
    isValidExpirationSegment,
    handlePeriodChange
  );

  return (
    <ExpirationPeriodInputsView
      expiryDateInfo={fieldStates}
      handleInputChange={handleFieldChange}
      onFocus={showPeriodSeparator}
      onBlur={hidePeriodSeparator}
    />
  );
};

export default ExpirationPeriodInputs;
