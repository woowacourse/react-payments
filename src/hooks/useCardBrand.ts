import { useEffect } from 'react';
import useSelect from './useSelect';
import { ShowNextFieldConditionParams } from './useCreateNextField';

const useCardBrand = (
  defaultValue: string | null,
  showNextFieldOnValid: (params: ShowNextFieldConditionParams) => void,
) => {
  const { value, onChange, clear } = useSelect(defaultValue);
  const isCardBrandError = value === null;
  const isFill = value !== null;

  useEffect(() => {
    showNextFieldOnValid({
      isFill,
      isFieldError: isCardBrandError,
      nextIndex: 2,
    });
  }, [isFill, isCardBrandError, showNextFieldOnValid]);

  return {
    cardBrandState: value,
    onChangeCardBrand: onChange,
    isCardBrandError,
    resetCardBrand: clear,
  };
};

export default useCardBrand;
