import { useRef, useState } from 'react';
import styled from 'styled-components';
import CardInput from '../components/CardInput/CardInput';
import CardLabel from '../components/CardLabel/CardLabel';

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

const AddCard = () => {
  const refObject: RefType = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
  };

  const [currentOrder, setCurrentOrder] = useState<number>(0);

  const handleCardInputChange = () => {
    if (refObject[currentOrder].current?.value.length === 4) {
      if (currentOrder === 3) return;
      refObject[currentOrder + 1].current?.focus();
      setCurrentOrder(currentOrder + 1);
    }
  };

  return (
    <>
      <CardLabel labelText="카드 번호" />
      <Wrapper>
        <CardInput
          type="text"
          maxLength={4}
          ref={refObject[0]}
          onChange={handleCardInputChange}
        />
        {refObject[0].current?.value.length === 4 && <p>-</p>}
        <CardInput
          type="text"
          maxLength={4}
          ref={refObject[1]}
          onChange={handleCardInputChange}
        />
        {refObject[1].current?.value.length === 4 && <p>-</p>}
        <CardInput
          type="password"
          maxLength={4}
          ref={refObject[2]}
          onChange={handleCardInputChange}
        />
        {refObject[2].current?.value.length === 4 && <p>-</p>}
        <CardInput
          type="password"
          maxLength={4}
          ref={refObject[3]}
          onChange={handleCardInputChange}
        />
      </Wrapper>
    </>
  );
};

export default AddCard;
