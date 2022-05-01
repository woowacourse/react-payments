import PropTypes from 'prop-types';

import { Container, CardContainer, ComponyName, UserName, ExpireDate, CardNumber } from './styles';

const cardNumberFormatter = (cardNumber) => {
  const newCardNumber = [...cardNumber].map((unit) => (unit === '' ? '0000' : unit));
  const maskingIndexes = [2, 3];

  maskingIndexes.forEach((index) => {
    if (newCardNumber.length <= index) return;

    newCardNumber[index] = '⦁'.repeat(newCardNumber[index].length);
  });

  return newCardNumber.join('-');
};

function Card({ companyName, cardNumber, userName, expireMonth, expireYear, isComplete }) {
  return (
    <Container>
      <CardContainer>
        <ComponyName>{companyName}</ComponyName>
        <UserName>{userName}</UserName>

        <ExpireDate>{expireMonth && expireYear && `${expireMonth} / ${expireYear}`}</ExpireDate>
        <CardNumber>{cardNumberFormatter(cardNumber)}</CardNumber>
      </CardContainer>
    </Container>
  );
}

Card.defaultProps = {
  companyName: '',
  cardNumber: ['', '', '', ''],
  userName: '',
  expireMonth: '',
  expireYear: '',
  isComplete: false,
};

Card.propTypes = {
  companyName: PropTypes.string,
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  userName: PropTypes.string,
  expireMonth: PropTypes.string,
  expireYear: PropTypes.string,
  isComplete: PropTypes.bool,
};

export default Card;
