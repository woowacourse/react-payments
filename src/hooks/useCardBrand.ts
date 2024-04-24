import useSelect from './useSelect';

const useCardBrand = (defaultValue: string | null) => {
  const { value, onChange } = useSelect(defaultValue);

  return {
    cardBrandState: value,
    setCardBrandState: onChange,
  };
};

export default useCardBrand;
