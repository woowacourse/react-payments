import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { GUIDE_MESSAGES } from '../../utils/constants/messages.js';

export const Card = ({ size, company, numbers, owner, validDay, ...props }) => {
  const validMonthDisplay = Number(validDay.month) < 10 ? `0${validDay.month}` : validDay.month;

  return (
    <Styled.Container size={size} company={company} {...props}>
      <Styled.Inner>
        <Styled.Header size={size}>
          <Styled.Company>
            {company ? `${company}카드` : GUIDE_MESSAGES.CHOOSE_CARD_COMPANY}
          </Styled.Company>
        </Styled.Header>
        <Styled.Body>
          <Styled.IcChip />
          <Styled.NumbersContainer size={size}>
            <Styled.Numbers size={size}>{numbers.first}</Styled.Numbers>
            <Styled.Numbers size={size}>{numbers.second}</Styled.Numbers>
            <Styled.BlindNumbers>
              {[...Array(numbers.third.length)].map((_, idx) => (
                <Styled.BlindDot size={size} key={idx} />
              ))}
            </Styled.BlindNumbers>
            <Styled.BlindNumbers>
              {[...Array(numbers.fourth.length)].map((_, idx) => (
                <Styled.BlindDot size={size} key={idx} />
              ))}
            </Styled.BlindNumbers>
          </Styled.NumbersContainer>
        </Styled.Body>
        <Styled.Footer size={size}>
          <Styled.Owner>{!owner ? GUIDE_MESSAGES.CARD_OWNER : owner}</Styled.Owner>
          <Styled.ValidDay>
            {`${validDay.month ? validMonthDisplay : GUIDE_MESSAGES.VALID_DATE_MONTH}/${
              validDay.year ? validDay.year : GUIDE_MESSAGES.VALID_DATE_YEAR
            }`}
          </Styled.ValidDay>
        </Styled.Footer>
      </Styled.Inner>
    </Styled.Container>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  company: PropTypes.oneOf(['', '포코', '준', '공원', '브랜', '로이드', '도비', '콜린', '썬']),
  numbers: PropTypes.shape({
    first: PropTypes.string,
    second: PropTypes.string,
    third: PropTypes.string,
    fourth: PropTypes.string,
  }),
  owner: PropTypes.string,
  validDay: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
