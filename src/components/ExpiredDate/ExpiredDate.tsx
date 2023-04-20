import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';
import { useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
  margin-bottom: 20px;
`;

const Pargraph = styled.p`
  width: 16px;
`;

interface ExpiredDateProps {
  expiredDate: Record<number, string>;
  setExpiredDate: React.Dispatch<React.SetStateAction<Record<number, string>>>;
}

const ExpiredDate = ({ expiredDate, setExpiredDate }: ExpiredDateProps) => {
  const cardExpiredDateRefs: Record<
    number,
    React.RefObject<HTMLInputElement>
  > = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (/[^0-9]/g.test(e.target.value)) {
      return;
    }
    setExpiredDate({ ...expiredDate, [currentOrder]: e.target.value });

    validateDate(currentOrder);
  };

  const validateDate = (currentOrder: number) => {
    const currentRef = cardExpiredDateRefs[currentOrder];

    if (currentRef.current === null) return;
    // todo
    if (currentRef.current.value.length !== 2) return;

    if (currentOrder === 1) {
      if (/^[0-9]{2}/g.test(currentRef.current.value)) return;
      setExpiredDate({ ...expiredDate, 1: '' });
      return;
    }

    cardExpiredDateRefs[currentOrder + 1].current?.focus();

    if (!/^(0[1-9]|1[0-2])/g.test(currentRef.current.value)) {
      setExpiredDate({ ...expiredDate, 0: '' });
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
          ref={cardExpiredDateRefs[0]}
          onChange={handleCardInputChange}
          value={expiredDate[0]}
          order={0}
          placeholder="MM"
          required={true}
        />
        <Pargraph>/</Pargraph>
        <CardInput
          type="text"
          maxLength={2}
          ref={cardExpiredDateRefs[1]}
          onChange={handleCardInputChange}
          value={expiredDate[1]}
          order={1}
          placeholder="YY"
          required={true}
        />
      </Wrapper>
    </>
  );
};

export default ExpiredDate;
