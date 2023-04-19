import { Input } from 'components/common';
import { ChangeEventHandler, useState } from 'react';

const DEFAULT_CARD_NUMBER = '0000';
export function CardNumberInput() {
  const [cardNumbers, setCardNumbers] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const validateInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const isNumber = !isNaN(Number(value));
    if (!isNumber) {
      setCardNumbers((prev) => {
        return {
          ...prev,
          [Number(e.target.dataset.id)]: value.slice(0, -1),
        };
      });
      return;
    }
    setCardNumbers((prev) => {
      return {
        ...prev,
        [Number(e.target.dataset.id)]: value,
      };
    });
  };

  return (
    <>
      <Input
        data-id={0}
        value={cardNumbers[0]}
        type="text"
        maxLength={4}
        onChange={validateInput}
        placeholder={DEFAULT_CARD_NUMBER}
      />
      <Input
        data-id={1}
        value={cardNumbers[1]}
        type="text"
        maxLength={4}
        onChange={validateInput}
        placeholder={DEFAULT_CARD_NUMBER}
      />
      <Input
        data-id={2}
        value={cardNumbers[2]}
        type="password"
        maxLength={4}
        onChange={validateInput}
        placeholder={DEFAULT_CARD_NUMBER}
      />
      <Input
        data-id={3}
        value={cardNumbers[3]}
        type="password"
        maxLength={4}
        onChange={validateInput}
        placeholder={DEFAULT_CARD_NUMBER}
      />
    </>
  );
}
