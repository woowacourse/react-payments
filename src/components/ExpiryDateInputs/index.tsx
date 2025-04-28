import { useExpiryDateContext } from '../../contexts/ExpiryDateContext';
import { useFormUiLogic } from '../../hooks/useFormUiLogic';
import ExpiryDateInputsView from './ExpiryDateInputsView';

const ExpiryDateInputs = () => {
  const { expiryFields, handleExpiryChange, expiryInputRefs } =
    useExpiryDateContext();
  const { showPeriodSeparator, hidePeriodSeparator } = useFormUiLogic();

  return (
    <ExpiryDateInputsView
      expiryDateInfo={expiryFields}
      handleInputChange={handleExpiryChange}
      expiryInputRefs={expiryInputRefs}
      onFocus={showPeriodSeparator}
      onBlur={hidePeriodSeparator}
    />
  );
};

export default ExpiryDateInputs;
