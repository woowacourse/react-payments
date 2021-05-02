import useInput from './useInput';
import useLocalStorage from './useLocalStorage';
import useJsonServer from './useJsonServer';
import useModal from './useModal';
import useMultipleInput from './useMultipleInput';
import useVirtualNumericKeyboard from './useVirtualNumericKeyboard';
import useMousePressTimer from './useMousePressTimer';

const useServerAPI = process.env.REACT_APP_ENV === 'stage' ? useLocalStorage : useJsonServer;

export {
  useInput,
  useServerAPI,
  useModal,
  useMultipleInput,
  useVirtualNumericKeyboard,
  useMousePressTimer,
};
