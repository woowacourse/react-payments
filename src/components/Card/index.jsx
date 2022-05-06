import PropTypes from 'prop-types';
import { COLOR_NAMES } from '../../constant';
import * as styled from './index.styled';
import { useCardFormContext } from '../../context/card-form-context';

const Card = ({ onClick }) => {
  const {
    state: {
      firstCardNumber,
      secondCardNumber,
      thirdCardNumber,
      fourthCardNumber,
      expiredMonth,
      expiredYear,
      cardType,
      ownerName,
    },
  } = useCardFormContext();
  return (
    <styled.Container onClick={onClick}>
      <styled.EmptyCard color={cardType.color}>
        <styled.CardTop>
          <styled.CardName>
            {cardType.name ? cardType.name : '카드이름'}
          </styled.CardName>
        </styled.CardTop>
        <styled.CardMiddle>
          <styled.CardChip />
          <styled.CardNumbers>
            {firstCardNumber && <span>{firstCardNumber}</span>}
            {secondCardNumber && <span>{secondCardNumber}</span>}
            {thirdCardNumber && (
              <span>{'•'.repeat(thirdCardNumber.length)}</span>
            )}
            {fourthCardNumber && (
              <span>{'•'.repeat(fourthCardNumber.length)}</span>
            )}
          </styled.CardNumbers>
        </styled.CardMiddle>
        <styled.CardBottom>
          <styled.CardBottomInfo>
            <styled.CardOwnerContainer>
              {ownerName ? ownerName : 'NAME'}
            </styled.CardOwnerContainer>
            <styled.CardExpiredDateContainer>
              {expiredMonth ? expiredMonth : 'MM'}
              {` / ${expiredYear ? expiredYear : 'YY'}`}
            </styled.CardExpiredDateContainer>
          </styled.CardBottomInfo>
        </styled.CardBottom>
      </styled.EmptyCard>
    </styled.Container>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf(COLOR_NAMES),
  name: PropTypes.string,
  ownerName: PropTypes.string,
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  firstCardNumber: PropTypes.string,
  secondCardNumber: PropTypes.string,
  thirdCardNumber: PropTypes.string,
  fourthCardNumber: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
