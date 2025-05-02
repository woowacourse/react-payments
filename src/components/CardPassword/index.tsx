import CardPasswordView from './CardPasswordView';
import { useCardPassword } from '../../hooks/useCardPassword';

export interface CardPasswordProps {
  passwordNumbers: string;
  setPasswordNumbers: React.Dispatch<React.SetStateAction<string>>;
  setPasswordError: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardPassword = ({
  passwordNumbers,
  setPasswordNumbers,
  setPasswordError,
}: CardPasswordProps) => {
  const { errorMessage, error, handleInputChange } = useCardPassword({
    setPasswordNumbers,
    setPasswordError,
  });

  return (
    <CardPasswordView
      passwordNumbers={passwordNumbers}
      errorMessage={errorMessage}
      error={error}
      handleInputChange={handleInputChange}
    />
  );
};

export default CardPassword;
