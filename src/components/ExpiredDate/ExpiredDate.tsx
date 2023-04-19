import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';
import { useRef, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
`;

interface RefType {
  [key: number]: React.RefObject<HTMLInputElement>;
}

interface TypingType {
  [key: number]: string;
}

const ExpiredDate = () => {
  const refObject: RefType = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const [typing, setTyping] = useState<TypingType>({
    0: '',
    1: '',
  });

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (/[^0-9]/g.test(e.target.value)) {
      return;
    }
    setTyping({ ...typing, [currentOrder]: e.target.value });

    validateDate(currentOrder);
  };

  const validateDate = (currentOrder: number) => {
    const currentRef = refObject[currentOrder];

    if (currentRef.current === null) return;
    if (currentRef.current.value.length !== 2) return;

    if (currentOrder === 1) {
      if (/^[0-9]{2}/g.test(currentRef.current.value)) return;
      setTyping({ ...typing, 1: '' });
      return;
    }

    refObject[currentOrder + 1].current?.focus();

    if (!/^(0[1-9]|1[0-2])/g.test(currentRef.current.value)) {
      setTyping({ ...typing, 0: '' });
      currentRef.current.focus();
      return;
    }
  };

  return (
    <>
      <CardLabel labelText="만료일" />
      <Wrapper>
        <CardInput
          type="text"
          maxLength={2}
          ref={refObject[0]}
          onChange={handleCardInputChange}
          value={typing[0]}
          order={0}
          placeholder="MM"
        />
        <p>/</p>
        <CardInput
          type="text"
          maxLength={2}
          ref={refObject[1]}
          onChange={handleCardInputChange}
          value={typing[1]}
          order={1}
          placeholder="YY"
        />
      </Wrapper>
    </>
  );
};

export default ExpiredDate;
