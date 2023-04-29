import { useContext } from 'react';
import {
  ModalActionContext,
  ModalStateContext,
} from '../components/provider/ModalProvider';

export const useModalStateContext = () => {
  const modalState = useContext(ModalStateContext);

  return modalState;
};

export const useModalActionContext = () => {
  const modalAction = useContext(ModalActionContext);

  return modalAction;
};
