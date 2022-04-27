import useInput from './useInput';

export default function useCardOwnerName(initialValue) {
  const [cardOwnerName, onChangeFunc] = useInput(initialValue);

  const setCardOwnerName = e => {
    if (e.target.value.length <= 30) {
      onChangeFunc(e);
    }
  };

  return [cardOwnerName, setCardOwnerName];
}
