import { isAlphabet, isNumber, validateMonth, validateYear } from '../utils/validateInput';
import { SetState } from '../@types';

const useAddCardForm = () => {
  const onChangeCardDateState =
    (type: string) =>
    (setState: SetState, key: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (key) {
        case 'month':
          validateMonth(e.target);
          break;
        case 'year':
          validateYear(e.target);
          break;
        default:
      }
      onChangeState(type)(setState, key)(e);
    };

  const onChangeState =
    (type: string) =>
    (setState: SetState, key?: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (type) {
        case 'number':
        case 'password':
          if (!isNumber(e.target.value)) return;
          break;
        case 'text':
          if (!isAlphabet(e.target.value)) return;
          break;
      }
      if (key) setState(e.target.value, key);
      else setState(e.target.value);
    };

  return {
    onChangeCardDateState,
    onChangeState,
  };
};

export default useAddCardForm;
