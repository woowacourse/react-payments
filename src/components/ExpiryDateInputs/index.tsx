import { useCardForm } from '../../contexts/CardFormContext';
import ExpiryDateInputsView from './ExpiryDateInputsView';

const ExpiryDateInputs = () => {
  const {
    expiryFields,
    handleExpiryFieldChange,
    expiryInputRefs,
    showPeriodSeparator,
    hidePeriodSeparator,
  } = useCardForm();

  return (
    <ExpiryDateInputsView
      expiryDateInfo={expiryFields}
      handleInputChange={handleExpiryFieldChange}
      expiryInputRefs={expiryInputRefs}
      onFocus={showPeriodSeparator}
      onBlur={hidePeriodSeparator}
    />
  );
};

export default ExpiryDateInputs;
