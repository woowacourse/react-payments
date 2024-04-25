import useSelect from './useSelect';

const useCardBrand = (defaultValue: string | null) => {
  const { value, onChange } = useSelect(defaultValue);
  const isCardBrandError = value === null;

  return {
    cardBrandState: value,
    setCardBrandState: onChange,
    isCardBrandError,
  };
};

export default useCardBrand;
