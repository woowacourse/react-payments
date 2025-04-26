import { useEffect, useState } from 'react';
import NumberInputsView from './NumberInputsView';
import { NumberInfo } from '../../types/models';
import { isNumeric, isValidSegment } from '../../utils/cardValidation';

interface NumberInputsProps {
  numbers: string[];
  handleNumbersChange: (newNumbers: string[]) => void;
}

const NUMBERS_LENGTH = 4;

const NumberInputs = ({
  numbers,
  handleNumbersChange,
}: NumberInputsProps) => {
  const [numbersInfo, setNumbersInfo] = useState<NumberInfo[]>(() =>
    numbers.map((number) => ({
      number,
      isError: false,
      placeholder: '1234',
      numberSegmentLength: NUMBERS_LENGTH,
    }))
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const valid =
      isNumeric(value) && isValidSegment(value, NUMBERS_LENGTH);

    setNumbersInfo((prev) =>
      prev.map((info, i) =>
        i === index
          ? {
              ...info,
              number: valid ? value : info.number,
              isError: !valid,
            }
          : info
      )
    );
  };

  useEffect(() => {
    handleNumbersChange(numbersInfo.map((info) => info.number));
  }, [numbersInfo]);

  return (
    <NumberInputsView
      numbersInfo={numbersInfo}
      handleInputChange={handleInputChange}
    />
  );
};

export default NumberInputs;
