import { useEffect, useRef } from 'react';
import { InputType } from '../types/input';

interface Props {
  inputTypes: InputType;
  handleNext: () => void;
}

const useNextRef = ({ inputTypes, handleNext }: Props) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputNext = (index: number) => {
    if (index < inputTypes.inputInfo.length - 1 && inputRefs.current) {
      inputRefs.current[index + 1].focus();
    }

    if (index === inputTypes.inputInfo.length - 1) {
      handleNext();
    }
  };

  return { inputRefs, handleInputNext };
};

export default useNextRef;
