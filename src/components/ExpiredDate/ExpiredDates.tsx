import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext } from 'react';
import * as Styled from './ExpiredDates.styles';
import { RefContext } from '../../contexts/RefProvider';

interface ExpiredDateProps {
  expiredDates: Array<string>;
  isSetExpiredDates: (order: number, value: string) => boolean;
}

const ExpiredDate = ({ expiredDates, isSetExpiredDates }: ExpiredDateProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']) + 4;

    if (!isSetExpiredDates(Number(e.target.dataset['order']), e.target.value))
      return;

    if (cardRefs[currentOrder].current?.value.length === 2) {
      if (currentOrder === 1) return;
      cardRefs[currentOrder + 1].current?.focus();
    }
  };

  return (
    <>
      <CardLabel labelText="만료일" />
      <Styled.Wrapper>
        <CardInput
          type="text"
          maxLength={2}
          ref={cardRefs[4]}
          onChange={handleCardInputChange}
          value={expiredDates[0]}
          order={0}
          placeholder="MM"
          required={true}
        />
        {cardRefs[4].current?.value.length === 2 && (
          <Styled.Pargraph>/</Styled.Pargraph>
        )}
        <CardInput
          type="text"
          maxLength={2}
          ref={cardRefs[5]}
          onChange={handleCardInputChange}
          value={expiredDates[1]}
          order={1}
          placeholder="YY"
          required={true}
        />
      </Styled.Wrapper>
    </>
  );
};

export default ExpiredDate;
