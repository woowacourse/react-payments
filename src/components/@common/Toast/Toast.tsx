import * as Styled from './Toast.styles';

interface ToastProps {
  isToastOpened: boolean;
  message: string;
}

const Toast = ({ isToastOpened, message }: ToastProps) => {
  return <Styled.Toast isToastOpened={isToastOpened}>{message}</Styled.Toast>;
};

export default Toast;
