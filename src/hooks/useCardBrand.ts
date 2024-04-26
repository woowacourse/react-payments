import useSelect from './useSelect';

const useCardBrand = (defaultValue: string | null) => {
  const { value, onChange, clear } = useSelect(defaultValue);
  const isCardBrandError = value === null;

  return {
    cardBrandState: value,
    setCardBrandState: onChange,
    isCardBrandError,
    resetCardBrand: clear,
  };
};

export default useCardBrand;
