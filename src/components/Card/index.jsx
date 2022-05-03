import PropTypes from 'prop-types';
import { COLOR_NAMES } from '../../constant';
import * as styled from './index.styled';

const Card = ({
  name,
  ownerName,
  color = 'red',
  expiredMonth,
  expiredYear,
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  onClick,
}) => {
  return (
    <styled.Container onClick={onClick}>
      <styled.EmptyCard color={color}>
        <styled.CardTop>
          <styled.CardName>{name}</styled.CardName>
        </styled.CardTop>
        <styled.CardMiddle>
          <styled.CardChip />
          <styled.CardNumbers>
            {firstCardNumber && <span>{firstCardNumber}</span>}
            {secondCardNumber && <span>{secondCardNumber}</span>}
            {thirdCardNumber && (
              <span>
                {Array.from({ length: thirdCardNumber.length }).map(() => '•')}
              </span>
            )}
            {fourthCardNumber && (
              <span>
                {Array.from({ length: fourthCardNumber.length }).map(() => '•')}
              </span>
            )}
          </styled.CardNumbers>
        </styled.CardMiddle>
        <styled.CardBottom>
          <styled.CardBottomInfo>
            <styled.CardOwnerContainer>{ownerName}</styled.CardOwnerContainer>
            <styled.CardExpiredDateContainer>
              {expiredMonth}
              {expiredYear && `/ ${expiredYear}`}
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
