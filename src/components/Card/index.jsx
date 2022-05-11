import PropTypes from 'prop-types';
import { CARD_TYPE_NAMES, CARD_COLOR_BY_NAME } from '../../constant';
import * as Styled from './index.styled';

const Card = ({
  onClick,
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  expiredMonth,
  expiredYear,
  cardType,
  ownerName,
}) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.EmptyCard color={CARD_COLOR_BY_NAME[cardType]}>
        <Styled.CardTop>
          <Styled.CardName>{cardType ? cardType : '카드이름'}</Styled.CardName>
        </Styled.CardTop>
        <Styled.CardMiddle>
          <Styled.CardChip />
          <Styled.CardNumbers>
            {firstCardNumber && <span>{firstCardNumber}</span>}
            {secondCardNumber && <span>{secondCardNumber}</span>}
            {thirdCardNumber && (
              <span>{'•'.repeat(thirdCardNumber.length)}</span>
            )}
            {fourthCardNumber && (
              <span>{'•'.repeat(fourthCardNumber.length)}</span>
            )}
          </Styled.CardNumbers>
        </Styled.CardMiddle>
        <Styled.CardBottom>
          <Styled.CardBottomInfo>
            <Styled.CardOwnerContainer>
              {ownerName ? ownerName.toUpperCase() : 'NAME'}
            </Styled.CardOwnerContainer>
            <Styled.CardExpiredDateContainer>
              {expiredMonth ? expiredMonth : 'MM'}
              {` / ${expiredYear ? expiredYear : 'YY'}`}
            </Styled.CardExpiredDateContainer>
          </Styled.CardBottomInfo>
        </Styled.CardBottom>
      </Styled.EmptyCard>
    </Styled.Container>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  ownerName: PropTypes.string,
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  firstCardNumber: PropTypes.string,
  secondCardNumber: PropTypes.string,
  thirdCardNumber: PropTypes.string,
  fourthCardNumber: PropTypes.string,
  cardType: PropTypes.oneOf(CARD_TYPE_NAMES),
  onClick: PropTypes.func,
};

export default Card;
