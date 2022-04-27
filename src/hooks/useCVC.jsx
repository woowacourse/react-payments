import useInput from './useInput';

export default function useCVC(initialValue) {
  const [CVC, onChangeFunc] = useInput(initialValue);

  const setCVC = e => {
    if (!/^$|^[0-9]{0,4}$/.test(e.target.value)) return;

    if (e.target.value.length <= 3) {
      onChangeFunc(e);
    }
  };

  return [CVC, setCVC];
}
