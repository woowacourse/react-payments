import Button, { type ButtonProps } from '../ui/Button.tsx';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants.ts';

type AddCardButtonProps = ButtonProps;

export default function AddCardButton({ children, ...buttonProps }: AddCardButtonProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.ADD_CARD);
  };

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {children}
    </Button>
  );
}
