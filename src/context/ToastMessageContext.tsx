import { createContext, PropsWithChildren, useContext, useRef, useState } from 'react';
import Toast from '../components/@common/Toast/Toast';

interface ToastContextProps {
  message: string;
  isToastOpened: boolean;
  showToast: (message: string) => void;
}

const ToastMessageContext = createContext<ToastContextProps | null>(null);

export const useToastContext = () => {
  const context = useContext(ToastMessageContext);

  if (context === null) {
    throw new Error('useToastMessageContext 는 ToastMessageProvider 를 통해 사용되어야 합니다.');
  }

  return context;
};

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState('');
  const [isToastOpened, setIsToastOpened] = useState(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = (message: string) => {
    setIsToastOpened(true);
    setMessage(message);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsToastOpened(false);
      setMessage('');
    }, 2000);
    toastTimer.current = timer;
  };

  return (
    <ToastMessageContext.Provider value={{ message, isToastOpened, showToast }}>
      {children}
      <Toast isToastOpened={isToastOpened} message={message} />
    </ToastMessageContext.Provider>
  );
};
