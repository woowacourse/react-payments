import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';
import { useRef } from 'react';
import { REG_EXP } from '../../constants/regexp';

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
  expiredDates: Array<string>;
  setExpiredDates: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const ExpiredDate = ({ expiredDates, setExpiredDates }: ExpiredDateProps) => {
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

    if (REG_EXP.cardNumberLimit.test(e.target.value)) {
      return;
    }
    setExpiredDates({ ...expiredDates, [currentOrder]: e.target.value });

    validateDate(currentOrder);
  };

  const validateDate = (currentOrder: number) => {
    const currentRef = cardExpiredDateRefs[currentOrder];

    if (currentRef.current === null) return;

    if (currentRef.current.value.length !== 2) return;

    if (currentOrder === 1) {
      if (REG_EXP.cardExpiredYearForm.test(currentRef.current.value)) return;
      setExpiredDates({ ...expiredDates, 1: '' });
      return;
    }

    cardExpiredDateRefs[currentOrder + 1].current?.focus();

    if (!REG_EXP.cardExpiredMonthForm.test(currentRef.current.value)) {
      setExpiredDates({ ...expiredDates, 0: '' });
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
          value={expiredDates[0]}
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
          value={expiredDates[1]}
          order={1}
          placeholder="YY"
          required={true}
        />
      </Wrapper>
    </>
  );
};

export default ExpiredDate;
