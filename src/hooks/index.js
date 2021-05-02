import useInput from './useInput';
import useLocalStorage from './useLocalStorage';
import useJsonServer from './useJsonServer';
import useModal from './useModal';
import useMultipleInput from './useMultipleInput';
import useVirtualNumericKeyboard from './useVirtualNumericKeyboard';
import useMousePressTimer from './useMousePressTimer';

const useCardData = process.env.REACT_APP_ENV === 'stage' ? useLocalStorage : useJsonServer;

export {
  useInput,
  useLocalStorage,
  useCardData,
  useModal,
  useMultipleInput,
  useVirtualNumericKeyboard,
  useMousePressTimer,
};
