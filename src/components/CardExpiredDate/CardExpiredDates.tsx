import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext, useState } from 'react';
import * as Styled from './CardExpiredDates.styles';
import { RefContext } from '../../contexts/RefProvider';

interface ExpiredDateProps {
  expiredDates: Array<string>;
  isSetExpiredDates: (order: number, value: string) => boolean;
}

const nowDate = new Date();

const getCurrentDateToString = () => {
  const month =
    String(nowDate.getMonth() + 1).length === 1
      ? `0${nowDate.getMonth() + 1}`
      : `${nowDate.getMonth() + 1}`;

  const year = `${nowDate.getFullYear() % 2000}`;
  return `${month}/${year}`;
};

const CardExpiredDate = ({
  expiredDates,
  isSetExpiredDates,
}: ExpiredDateProps) => {
  const cardRefs = useContext(RefContext);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (!isSetExpiredDates(currentOrder - 4, e.target.value)) {
      setErrorMessage(
        `유효한 만료일을 ${getCurrentDateToString()}의 형태로 입력해주세요.`
      );
      return;
    }

    setErrorMessage('');
    focusNextInput(currentOrder);
  };

  const focusNextInput = (currentOrder: number) => {
    if (cardRefs[currentOrder].current?.value.length === 2) {
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
          order={4}
          placeholder="MM"
          required={true}
        />
        {cardRefs[4].current?.value.length === 2 && (
          <Styled.Paragraph>/</Styled.Paragraph>
        )}
        <CardInput
          type="text"
          maxLength={2}
          ref={cardRefs[5]}
          onChange={handleCardInputChange}
          value={expiredDates[1]}
          order={5}
          placeholder="YY"
          required={true}
        />
      </Styled.Wrapper>
      <Styled.ErrorTextWrapper>{errorMessage}</Styled.ErrorTextWrapper>
    </>
  );
};

export default CardExpiredDate;
