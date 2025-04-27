import { useCardForm } from '../../contexts/CardFormContext';
import ExpirationPeriodInputsView from './ExpirationPeriodInputsView';

const ExpirationPeriodInputs = () => {
  const {
    expiryFields,
    handleExpiryFieldChange,
    expiryInputRefs,
    showPeriodSeparator,
    hidePeriodSeparator,
  } = useCardForm();

  return (
    <ExpirationPeriodInputsView
      expiryDateInfo={expiryFields}
      handleInputChange={handleExpiryFieldChange}
      expiryInputRefs={expiryInputRefs}
      onFocus={showPeriodSeparator}
      onBlur={hidePeriodSeparator}
    />
  );
};

export default ExpirationPeriodInputs;
