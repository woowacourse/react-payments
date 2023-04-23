import { useRef } from 'react';
import { YEAR_REGEX, MONTH_REGEX } from '../../constants/regex';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './ExpiredDate.styles';

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
      if (YEAR_REGEX.test(currentRef.current.value)) return;
      setExpiredDate({ ...expiredDate, 1: '' });
      return;
    }

    cardExpiredDateRefs[currentOrder + 1].current?.focus();

    if (!MONTH_REGEX.test(currentRef.current.value)) {
      setExpiredDate({ ...expiredDate, 0: '' });
      currentRef.current.focus();
      return;
    }
  };

  return (
    <>
      <CardLabel labelText="만료일" />
      <Styled.Wrapper>
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
        <Styled.Pargraph>/</Styled.Pargraph>
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
      </Styled.Wrapper>
    </>
  );
};

export default ExpiredDate;
