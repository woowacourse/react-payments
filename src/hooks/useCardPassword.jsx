import useInput from './useInput';

export default function useCardPassword(initialValue) {
  const [password, onChangeFunc] = useInput(initialValue);

  const setPassword = e => {
    if (!/^$|^[0-9]{0,1}$/.test(e.target.value)) return;

    onChangeFunc(e);
  };

  return [password, setPassword];
}
