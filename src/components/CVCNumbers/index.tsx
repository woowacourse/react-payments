import { useCVCNumbers } from '../../hooks/useCVCNumbers';
import CVCNumbersView from './CVCNumbersView';

export interface CVCNumbersProps {
  cvcNumbers: string;
  setCvcNumbers: React.Dispatch<React.SetStateAction<string>>;
  onComplete?: () => void;
  setCvcError: React.Dispatch<React.SetStateAction<boolean>>;
}

const CVCNumbers = ({
  cvcNumbers,
  setCvcNumbers,
  onComplete,
  setCvcError,
}: CVCNumbersProps) => {
  const { errorMessage, error, handleInputChange } = useCVCNumbers({
    cvcNumbers,
    setCvcNumbers,
    setCvcError,
  });

  return (
    <CVCNumbersView
      cvcNumbers={cvcNumbers}
      errorMessage={errorMessage}
      error={error}
      handleInputChange={handleInputChange}
      onComplete={onComplete}
    />
  );
};

export default CVCNumbers;
