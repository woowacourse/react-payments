import { useCardForm } from '../../contexts/CardFormContext';
import ExpirationPeriodInputsView from './ExpirationPeriodInputsView';

const ExpirationPeriodInputs = () => {
  const {
    expiryFields,
    handleExpiryFieldChange,
    showPeriodSeparator,
    hidePeriodSeparator,
  } = useCardForm();

  return (
    <ExpirationPeriodInputsView
      expiryDateInfo={expiryFields}
      handleInputChange={handleExpiryFieldChange}
      onFocus={showPeriodSeparator}
      onBlur={hidePeriodSeparator}
    />
  );
};

export default ExpirationPeriodInputs;
