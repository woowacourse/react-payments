import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ size, company, numbers, owner, validDay, ...props }) => {
  const [firstNumbers, secondNumbers, thirdNumbers, fourthNumbers] = numbers;
  // const hasNumbers = numbers.every((number) => number);

  return (
    <Styled.Container size={size} company={company} {...props}>
      <Styled.Inner>
        <Styled.Header size={size}>
          <Styled.Company>{company && `${company}카드`}</Styled.Company>
        </Styled.Header>
        <Styled.Body>
          <Styled.IcChip />
          <Styled.NumbersContainer size={size}>
            <Styled.Numbers>{firstNumbers && firstNumbers}</Styled.Numbers>
            <Styled.Numbers>{secondNumbers && secondNumbers}</Styled.Numbers>
            <Styled.Numbers isBlind={true}>{thirdNumbers && '••••'}</Styled.Numbers>
            <Styled.Numbers isBlind={true}>{fourthNumbers && '••••'}</Styled.Numbers>
          </Styled.NumbersContainer>
        </Styled.Body>
        <Styled.Footer size={size}>
          <Styled.Owner>{owner}</Styled.Owner>
          <Styled.ValidDay>{`${validDay.month}/${validDay.year}`}</Styled.ValidDay>
        </Styled.Footer>
      </Styled.Inner>
    </Styled.Container>
  );
};

Card.propTypes = {
  /**
   * Card size
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * Card Compony
   */
  company: PropTypes.oneOf(['', '포코', '준', '공원', '브랜', '로이드', '도비', '콜린', '썬']),
  /**
   * Card numbers sixteen digits { first: [], second: [], third: [], fourth: [] }
   */
  numbers: PropTypes.array,
  /**
   * Card owner name
   */
  owner: PropTypes.string,
  /**
   * Card validDay { month, year }
   */
  validDay: PropTypes.object,

  /**
   * Card choose company button
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  size: 'large',
  company: '',
  numbers: ['', '', '', ''],
  owner: 'NAME',
  validDay: {
    month: 'MM',
    year: 'YY',
  },
  onClick: undefined,
};
